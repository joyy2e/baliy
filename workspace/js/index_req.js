// 데이터베이스의 데이터를 임의로 만들자(JSON)...

// 사용자 정보 데이터
const users = [
    {id : 'admin', name : '임베디드', password : '1234'},
    {id : 'user', name : '홍길동', password : '1234'},
    {id : 'userId', name : '홍길동', password : '1234'}
]

// request 객체를 만들어 가상의 통신을 구현하자...
const request = {
    login : function(id, password){
        let item = null;
        for(let i = 0; i < users.length; i++){
            if(users[i].id === id) item = users[i];
        }
        if(item && item.password === password){
            return item; 
        }else{
            return null;
        }
    }
}