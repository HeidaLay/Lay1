import Mock from 'mockjs'
var Random = Mock.Random;
let data=Mock.mock(('http://www.xxbbtianxiadiyi.com'),{
    "list|5":[
        {
            'id|+1':1,
            'name':'@name',
            // 'e-mail':'@email'
            "date":'@date',
            "image":Random.dataImage('300x250',"haha")
        }
    ]
})
export default data;