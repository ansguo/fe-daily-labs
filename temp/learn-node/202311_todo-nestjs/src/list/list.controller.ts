import { Controller, Get, Post, Request, Query, Body, Param, Headers } from '@nestjs/common';
import { ListService } from './list.service';

@Controller('list') // 这个controller下面请求路径前面统一有list 
export class ListController {
  /**
   * 实例化 ListService
   * 相当于 this.listService = new ListService()
   */
  constructor(private listService: ListService) { }

  @Get()
  getList(): any {
    return this.listService.getList();
  }

  /**
   * get方法，获取参数 
   * 方式一：引入Request用来获取请求参数 req.query.xxx
   * 方式二：使用 @Query装饰器 query.xxx
   */
  // 方式一：
  // @Get('getTodoById')
  // getTodoById(@Request() req): any {
  //   const id = parseInt(req.query.id)
  //   return this.listService.getTodoById(id)
  // }

  // 方式二
  @Get('getTodoById')
  getTodoById(@Query() query): any {
    const id = parseInt(query.id)
    return this.listService.getTodoById(id)
  }

  /**
   * post方法，传递参数
   * 本地可用rest client插件本地调试
   * 获取参数的方式：
   * 1. @Request req.body
   * 2. @Body body
   * 
   */
  // @Post('/add')
  // addTodo(@Request() req): any {
  // console.log('use request get data', req.body)
  //   return this.listService.addTodo();
  // }

  @Post('/add')
  addTodo(@Body() body): any {
    console.log('use body get data', body)

    return this.listService.addTodo();
  }

  /**
   * 创建动态路由
   * 两种获取动态参数的方式：
   * 1. @Reqeust req.params.xxx
   * 2. @Param params.xxx
   * 
   * 也可以设置多个动态参数，比如/item/:id/:name
   */
  // @Get('/item/:id')
  // getItem(@Request() req): any {
  //   const id: number = parseInt(req.params.id)
  //   return this.listService.getTodoById(id)
  // }

  @Get('/item/:id/:name')
  getItem(@Param() param, @Headers() headers): any {
    const id: number = parseInt(param.id)
    const name: string = param.name
    console.log('/item/:id/:name', id, name)
    console.log('headers', headers)
    return this.listService.getTodoById(id)
  }

  // @Headers装饰器，用来获取请求头内的信息
}
