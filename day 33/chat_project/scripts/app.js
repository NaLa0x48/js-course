//dom queries
const chatlist = document.querySelector('.chat-list')
//class instance
const chatUI = new ChatUI(chatlist)
const chatroom = new Chatroom('gaming', 'shuan')
chatroom.getChat((data) => {
  chatUI.render(data)
})
