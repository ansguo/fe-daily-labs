import { Injectable } from '@nestjs/common';

@Injectable()
export class ListService {
  getList() {
    return {
      code: 0,
      data: ['代办事项1', '代办事项2', '代办事项3'],
    };
  }

  addTodo() {
    return {
      code: 200,
      data: { id: 1, name: '新增事项1' },
      msg: '添加成功'
    }
  }

  getTodoById(id: number) {
    let res: any = {}
    switch (id) {
      case 1:
        res = { id: 1, name: '代办事项1' }
        break;
      case 2:
        res = { id: 2, name: '代办事项2' }
        break;
      case 3:
        res = { id: 3, name: '代办事项3' }
        break;
    }
    return res
  }

}
