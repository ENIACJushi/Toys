import {ItemStack, system} from "@minecraft/server";

export class Fountain {
  /**
   * 创建单一物品喷泉
   * @param {{dimension, location, typeId: string, total: number, time: number, stackCount: number
   * , vHorizontalMax: number, vHorizontalMin: number, vVerticalMax: number, vVerticalMin: number}} config
   */
  static createItemFountain(config) {
    let remain = config.total;
    let dimension = config.dimension;
    let stepCount = Math.ceil(config.total / config.time); // 每刻要喷多少个物品
    let stackCount = config.stackCount;
    for (let i = 0; i < config.time; i++) {
      // 计算本次要喷的物品数量
      let count = Math.min(stepCount, remain);
      remain -= count;
      // 延迟喷发
      system.runTimeout(() => {
        while (count > 0) {
          let itemCount = Math.min(stackCount, count);
          count -= itemCount;
          let entity = dimension.spawnItem(new ItemStack(config.typeId, itemCount), config.location);
          entity.clearVelocity();
          entity.applyImpulse(
            Fountain.getVelocity(
              config.vVerticalMin,
              config.vVerticalMax,
              config.vHorizontalMin,
              config.vHorizontalMax
            )
          );
        }
      }, i);
    }
  }

  /**
   * 创建单一弹射物喷泉
   * @param {{dimension, location, typeId: string, total: number, velocity: number, time: number
   * , vHorizontalMax: number, vHorizontalMin: number, vVerticalMax: number, vVerticalMin: number}} config
   */
  static createProjectileFountain(config) {
    let remain = config.total;
    let dimension = config.dimension;
    let stepCount = Math.ceil(config.total / config.time); // 每刻要喷多少个弹射物
    for (let i = 0; i < config.time; i++) {
      // 计算本次要喷的物品数量
      let count = Math.min(stepCount, remain);
      remain -= count;
      // 延迟喷发
      system.runTimeout(() => {
        while (count > 0) {
          count--;
          let entity = dimension.spawnEntity(config.typeId, config.location);
          entity.getComponent('minecraft:projectile').shoot(
            Fountain.getVelocity(
              config.vVerticalMin,
              config.vVerticalMax,
              config.vHorizontalMin,
              config.vHorizontalMax
            )
          );
        }
      }, i);
    }
  }


  /**
   * 创建单一实体物喷泉
   * @param {{dimension, location, typeId: string, total: number, velocity: number, time: number
   * , vHorizontalMax: number, vHorizontalMin: number, vVerticalMax: number, vVerticalMin: number}} config
   */
  static createEntityFountain(config) {
    let remain = config.total;
    let dimension = config.dimension;
    let stepCount = Math.ceil(config.total / config.time); // 每刻要喷多少个弹射物
    for (let i = 0; i < config.time; i++) {
      // 计算本次要喷的物品数量
      let count = Math.min(stepCount, remain);
      remain -= count;
      // 延迟喷发
      system.runTimeout(() => {
        while (count > 0) {
          count--;
          let entity = dimension.spawnEntity(config.typeId, config.location);
          entity.clearVelocity();
          entity.applyImpulse(
            Fountain.getVelocity(
              config.vVerticalMin,
              config.vVerticalMax,
              config.vHorizontalMin,
              config.vHorizontalMax
            )
          )
        }
      }, i);
    }
  }
  ////// 工具 //////
  /**
   * 获取一个随机值
   * @param {number} a
   * @param {number} b
   * @returns {number}
   */
  static getRandom(a = 0, b = 1) {
    return (a < b) ? (a + Math.random() * (b - a)) : (b + Math.random() * (a - b));
  }

  /**
   * 获取喷泉动量
   * @param verticalMin 竖直最小速度
   * @param verticalMax 竖直最大速度
   * @param horizontalMin 水平最小速度
   * @param horizontalMax 水平最大速度
   * @returns {{x: *, y: *, z: *}}
   */
  static getVelocity(verticalMin=0, verticalMax=0.8, horizontalMin=0, horizontalMax=0.4) {
    let directionX = Fountain.getRandom() < 0.5 ? 1 : -1;
    let directionZ = Fountain.getRandom() < 0.5 ? 1 : -1;
    return {
      x: directionX * Fountain.getRandom(horizontalMin, horizontalMax), // xp_orb 0~0.2
      y: Fountain.getRandom(verticalMin, verticalMax), // xp_orb 0~0.4
      z: directionZ * Fountain.getRandom(horizontalMin, horizontalMax) // xp_orb 0~0.2
    }
  }
}