export class TypedBroadcastChannel<TMessage extends { type: string }> {
  private channel: BroadcastChannel;

  constructor(name: string) {
    this.channel = new BroadcastChannel(name);
    this.channel.addEventListener;
  }

  postMessage(message: TMessage) {
    this.channel.postMessage(message);
  }

  addEventListener<TEvent extends keyof BroadcastChannelEventMap>(
    type: TEvent,
    listener: (this: BroadcastChannel, ev: MessageEvent<TMessage>) => void,
    options?: boolean | AddEventListenerOptions
  ): void {
    this.channel.addEventListener(type, listener, options);
  }

  removeEventListener<TEvent extends keyof BroadcastChannelEventMap>(
    type: TEvent,
    listener: (this: BroadcastChannel, ev: MessageEvent<TMessage>) => void,
    options?: boolean | EventListenerOptions
  ): void {
    this.channel.removeEventListener(type, listener, options);
  }

  getBroadcastChannelInstance() {
    return this.channel;
  }
}
