
export class GoldenAnilBlockManager {
  /**
   * 注册自定义事件
   */
  static registerCC(e) {
    e.blockComponentRegistry.registerCustomComponent('doge:golden_anvil', {
      onTick(e) {
        /**
         * 所在区块开始下铁砧雨，严重损坏的铁砧会随机生成在足够摔碎的高度
         */
        e.dimension
      },
      onPlayerInteract(e) {

      }
    })
  }
}