import { SocketHandler } from '../utils/SocketHandler'
import { socketProvider } from '../SocketProvider.js'

export class RoomHandler extends SocketHandler {
  /**
   * @param {import("socket.io").Server} io
   * @param {import("socket.io").Socket} socket
   */
  constructor(io, socket) {
    super(io, socket)
    this
      .on('SOCKET_TEST', this.testEvent)
      .on('joined:room', this.joinedRoom)
      .on('left:room', this.leftRoom)
  }

  async testEvent(payload) {
    this.socket.emit('IS_TESTED', payload)
  }

  joinedRoom(payload){    
    this.socket.join(payload.roomName)
    socketProvider.messageRoom(payload.roomName, 'joined:room', this.user)  
  }
  leftRoom(payload){    
    this.socket.leave(payload.roomName)
    socketProvider.messageRoom(payload.roomName, 'left:room', this.user)  
  }
}
