import {BlockPermutation, BlockVolume, ItemStack, system, world} from '@minecraft/server';
import {Fountain} from "../libs/Fountain";

/**
 * 清空范围内的顶层雪，然后发射雪球
 * 效率：增大清除范围
 * 时运：增加每个顶层雪提供的雪球
 */
export class CleanSnow {
  static tools = ['minecraft:golden_shovel'];
  static RANGE_HORIZONTAL = 10;
  static RANGE_VERTICAL = 5;

  static FOUNTAIN_ITEM_VELOCITY_VERTICAL_MIN = 0.2; // 喷物品的竖直最小动量大小
  static FOUNTAIN_ITEM_VELOCITY_VERTICAL_MAX = 0.3; // 喷物品的竖直最大动量大小
  static FOUNTAIN_ITEM_VELOCITY_HORIZONTAL_MIN = 0; // 喷物品的水平最小动量大小
  static FOUNTAIN_ITEM_VELOCITY_HORIZONTAL_MAX = 0.1; // 喷物品的水平最大动量大小

  static FOUNTAIN_PROJ_VELOCITY_VERTICAL_MIN = 0.9; // 喷弹射物的竖直最小动量大小
  static FOUNTAIN_PROJ_VELOCITY_VERTICAL_MAX = 1.5; // 喷弹射物的竖直最大动量大小
  static FOUNTAIN_PROJ_VELOCITY_HORIZONTAL_MIN = 0; // 喷弹射物的水平最小动量大小
  static FOUNTAIN_PROJ_VELOCITY_HORIZONTAL_MAX = 0.4; // 喷弹射物的水平最大动量大小

  static FOUNTAIN_STACK_COUNT = 16; // 每次喷物品的堆叠数量
  static FOUNTAIN_TIME = 40; // 在多少刻内喷完所有物品/雪球

  static init() {
    world.afterEvents.playerBreakBlock.subscribe((e) => {
      let item = e.itemStackBeforeBreak;
      if (item && CleanSnow.tools.includes(item.typeId)) {
        CleanSnow.clean(e.block.dimension, e.block.bottomCenter(), true);
      }
    }, {
      blockTypes: ['minecraft:snow_layer']
    });

    world.beforeEvents.playerInteractWithBlock.subscribe((e) => {
      if (e.block.typeId !== 'minecraft:snow_layer' && e.block.typeId !== 'snow_layer') {
        return;
      }
      let item = e.itemStack;
      if (item && CleanSnow.tools.includes(item.typeId)) {
        CleanSnow.clean(e.block.dimension, e.block.bottomCenter(), true);
      }
    })
  }

  static clean(dimension, location, isSneaking) {
    system.run(() => {

      // 清除
      let snowBlocks = dimension.getBlocks(
        new BlockVolume({
          x: location.x - CleanSnow.RANGE_HORIZONTAL,
          y: location.y - CleanSnow.RANGE_VERTICAL,
          z: location.z - CleanSnow.RANGE_HORIZONTAL
        }, {
          x: location.x + CleanSnow.RANGE_HORIZONTAL,
          y: location.y + CleanSnow.RANGE_VERTICAL,
          z: location.z + CleanSnow.RANGE_HORIZONTAL
        }), { "includeTypes": ['minecraft:snow_layer'] }, true);
      dimension.fillBlocks(
        snowBlocks,
        BlockPermutation.resolve("air")
      );
      if (isSneaking) {
        // 雪球喷泉
        Fountain.createProjectileFountain({
          dimension,
          location,
          typeId: 'minecraft:snowball',
          total: Math.floor(snowBlocks.getCapacity()),
          time: CleanSnow.FOUNTAIN_TIME,
          vVerticalMin: CleanSnow.FOUNTAIN_PROJ_VELOCITY_VERTICAL_MIN,
          vVerticalMax: CleanSnow.FOUNTAIN_PROJ_VELOCITY_VERTICAL_MAX,
          vHorizontalMin: CleanSnow.FOUNTAIN_PROJ_VELOCITY_HORIZONTAL_MIN,
          vHorizontalMax: CleanSnow.FOUNTAIN_PROJ_VELOCITY_HORIZONTAL_MAX,
        });
      } else {
        // 物品喷泉
        Fountain.createItemFountain({
          dimension,
          location,
          typeId: 'minecraft:snowball',
          total: Math.floor(snowBlocks.getCapacity()),
          time: CleanSnow.FOUNTAIN_TIME,
          stackCount: CleanSnow.FOUNTAIN_STACK_COUNT,
          vVerticalMin: CleanSnow.FOUNTAIN_ITEM_VELOCITY_VERTICAL_MIN,
          vVerticalMax: CleanSnow.FOUNTAIN_ITEM_VELOCITY_VERTICAL_MAX,
          vHorizontalMin: CleanSnow.FOUNTAIN_ITEM_VELOCITY_HORIZONTAL_MIN,
          vHorizontalMax: CleanSnow.FOUNTAIN_ITEM_VELOCITY_HORIZONTAL_MAX,
        });
      }
      // 别用这个
      // Fountain.createEntityFountain({
      //   dimension,
      //   location,
      //   typeId: 'minecraft:tnt',
      //   total: Math.floor(snowBlocks.getCapacity()),
      //   time: CleanSnow.FOUNTAIN_TIME,
      //   vVerticalMin: CleanSnow.FOUNTAIN_PROJ_VELOCITY_VERTICAL_MIN,
      //   vVerticalMax: CleanSnow.FOUNTAIN_PROJ_VELOCITY_VERTICAL_MAX,
      //   vHorizontalMin: CleanSnow.FOUNTAIN_PROJ_VELOCITY_HORIZONTAL_MIN,
      //   vHorizontalMax: CleanSnow.FOUNTAIN_PROJ_VELOCITY_HORIZONTAL_MAX,
      // });
    });
  }

}

