declare namespace mota {

  /**
   * mota 的当前版本
   **/
  const version: string;

  /**
   * 将一个数据模型和组件关联到一起
   * @param model 业务模型，可以是类型，Object
   * @param component 组件
   */
  function connect(model?: any, component?: any): any;

  /**
   * 模型装饰器，通过 @model 可将模型关联到一个 Component
   * @param model 参数 model 可是以模型类或实例，如果是一个类将自动创建一个实例
   */
  function model(model?: any): any;

  /**
   * 自动执行方法装饰器，通过 @autorun 可声明一个组件方法，在依赖的模型数据方法发生变化时，
   * 自动生新执行，依赖的模型数据将从方法自动收集
   * @param target 组件 
   * @param method 组件的方法
   */
  function autorun(target?: any, method?: any): any;

  /**
   * 数据变化观察装饰器，通过 watch 能够在观察的数据发生变化时，自动执行组件方法
   * @param calculator Watcher 的计算函数，其计算结果发生变化时，才会执行被装饰的方法
   * @param immed 是否立即执行，默认为 false，当为 true 时，Watcher 将自动立即执行一次
   */
  function watch(calculator: Function, immed?: boolean): any;

  /**
   * 将组 Component 的属性（prop）自动映射到 model 的成员上
   * @param map 组件属性到模型成员的映射规则，可以是为 Map 或 Array
   */
  function mapping(map: Array<string> | Object | any): any;

  /**
   * 绑定装饰器，@binding 用于在一个组件上启用双向绑定（需要同时通过 @model 关联的模型）
   * @param component 要启用双向绑定能力的组件
   */
  function binding(component: any): any;

  /**
   * 用于将一个普通组件包装为「可绑定组件」的高阶函数
   * @param opts 绑定选项
   * @param component 原始组件
   */
  function bindable(opts: any, component?: any): any;

  /**
   * 通过 nextTick 在下一个事件循环的 `tick` 中执行回调方法
   * 在改变模型数据后，在 nextTick 的回调中能确保 UI 已经进行了渲染（执行了 render）
   * @param callback 事件循环的 tick 处理函数
   * @param ctx 这是一个可选参数，用于指定 Tick 函数执行上下文
   */
  function nextTick(callback: Function, ctx?: any): any;

  /**
   * 深度装饰器，用于在声明一个组件，对模型数据的依赖响应为深度观察
   * 同时，也可用于 watch & autorun，声明对其模型数据的深度观察
   * @param target 组件
   * @param method 组件方法（可选）
   */
  function deep(target: any, method?: any): any;

}

export = mota;