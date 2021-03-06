//adding new chat documents
//setting a real time listener to get new chats
//updating the username
//updating the room

class Chatroom {
  constructor(room, username) {
    this.room = room
    this.username = username
    this.chats = db.collection('chats')
  }
  async addChat(message) {
    //format a chat object
    const now = new Date()
    const chat = {
      message,
      username: this.username,
      room: this.room,
      created_at: firebase.firestore.Timestamp.fromDate(now),
    }
    //save the chat documents
    const response = await this.chats.add(chat)
    return response
  }
}

const chatroom = new Chatroom('gaming', 'shuan')
chatroom
  .addChat('hello everyone')
  .then(() => console.log('chat added'))
  .catch((err) => console.log(err))
console.log(chatroom)
