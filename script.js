
const root = document.getElementById('root')
let replyInput = document.getElementById('reply')

replyInput.addEventListener('keyup', checkReply);

function checkReply(){
    let replyButtons = document.querySelectorAll('.rBtn');
    console.log(replyButtons[0])
    replyButtons.forEach(btn=>{
         if(replyInput.value === '' || replyInput.value === undefined || replyInput.value === null){
        btn.disabled = true
    }else{
        btn.disabled = false
    }
    })
   
}

function createPost(text){
    let postNum = root.childElementCount+1
    let post = document.createElement('div');
    post.setAttribute('id', `p${postNum}`);
    let p = document.createElement('p')
    p.setAttribute('class','post');
    // p.style.backgroundColor = getRandomColor(`${postNum}`);
    p.innerHTML = text
    let replyContainer = document.createElement('div');
    replyContainer.setAttribute('class','reply')
    replyContainer.setAttribute('id', `rP${postNum}`)
    let replyBtn = document.createElement('button');
    replyBtn.setAttribute('class','rBtn')
    replyBtn.setAttribute('onclick', `Reply(rP${postNum})`)
    replyBtn.disabled=true;
    replyBtn.innerText = "Reply"
    p.append(replyBtn)
    post.append(p, replyContainer)
    return post
}

function createReply(id,text){
    console.log(id.id)
    let replyNum = id.childElementCount+1
    let reply = document.createElement('div');
    reply.setAttribute('id', `${id.id}R${replyNum}`);
    let p = document.createElement('p')
    p.setAttribute('class','rPost');
    p.innerHTML = text
    // p.style.backgroundColor = getRandomColor();
    let replyBtn = document.createElement('button');
    let replyContainer = document.createElement('div'); // reply container for reply of the post/reply
    replyContainer.setAttribute('class','reply')
    replyContainer.setAttribute('id', `r${id.id}R${replyNum}`)
    replyBtn.setAttribute('onclick', `Reply(r${id.id}R${replyNum})`)
    replyBtn.setAttribute('class','rBtn')
    replyBtn.disabled = true;
    replyBtn.innerText = "Reply"
    p.append(replyBtn)
    reply.append(p, replyContainer)
    return reply
}

function Post(){
    let input = document.getElementById('post');
    let post = createPost(input.value);
    root.insertBefore(post, root.children[0]);
    input.value = '';
    checkReply()
    input.focus();
}

function Reply(id){
    let input = document.getElementById('reply');
    let reply = createReply(id,input.value);
    id.append(reply);
    input.value = '';
    checkReply()
    input.focus();
}

function getRandomColor(num=10) {
    console.log(num)
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random()* +num *16)];
      
    }
    console.log(color);
    return color;
  }