/* 
this file is going to return the list of all the 'to do' items */

export async function handler (event, content){

    return {
        statusCode:200,
        body: JSON.stringify({path:"/api/todos"})
    }
}