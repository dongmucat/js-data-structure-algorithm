/* 　这里的报社我们可以理解为发布者（Publisher）的角色，
订报纸的读者理解为订阅者（Subscriber），
第三方平台就是事件中心；报社在平台上注册某一类型的报纸，
然后读者就可以在平台订阅这种报纸；三个类准备好了，我们来看下他们彼此如何进行联系 */


// 第三方平台
class Channel {
    constructor() {
        this.topics = {};
    }

    // 报社在平台上注册报纸(话题)
    addTopic(topicName) {
        // 对应的话题创建一个依赖数组，保存订阅者
        this.topics[topicName] = [];
    }

    // 报社取消注册
    removeTopic(topicName) {
        delete this.topics[topicName];
    }

    // 订阅者订阅报纸
    subscribeTopic(topicName, sub) {
        if (this.topics[topicName]) {
            this.topics[topicName].push(sub);
        }
    }

    // 订阅者取消订阅
    unSubscribeTopic(topicName, sub) {
        this.topics[topicName].forEach((item, index) => {
            if (item === sub) {
                this.topics[topicName].splice(index, 1)
            }
        });
    }

    // 平台同时某个话题下的所有订阅者
    pushlish(topicName) {
        this.topics[topicName].forEach((item) => {
            item.update(topicName)
        });
    }
}


// 报社
class Publisher {
    constructor(publisherName, channel) {
        this.publisherName = publisherName;
        this.channel = channel;
    }

    // 向平台注册报纸(话题)
    addTopic(topicName) {
        this.channel.addTopic(topicName);
    }

    // 向平台注销报纸(话题)
    removeTopic(topicName) {
        this.channel.removeTopic(topicName);
    }

    // 推送报纸
    publish(topicName) {
        this.channel.pushlish(topicName);
    }

}

// 订阅者
class Subscriber {
    constructor(subscriberName, channel) {
        this.subscriberName = subscriberName;
        this.channel = channel;
    }

    // 向平台订阅报纸
    subscribe(topicName) {
        this.channel.subscribeTopic(topicName, this);
    }

    //取消订阅
    unSubscribe(topicName) {
        this.channel.unSubscribeTopic(topicName, this);
    }
    //接收推送
    update(topicName) {
        console.log(`${topicName}已经送到${this.subscriberName}家了`);

    }
}

var channel = new Channel();

var pub1 = new Publisher("报社1", channel);
var pub2 = new Publisher("报社2", channel);

pub1.addTopic("晨报1");
pub1.addTopic("晚报1");
pub2.addTopic("晨报2");

var sub1 = new Subscriber("小明", channel);
var sub2 = new Subscriber("小红", channel);
var sub3 = new Subscriber("小张", channel);

sub1.subscribe("晨报1");
sub2.subscribe("晨报1");
sub2.subscribe("晨报2");
sub3.subscribe("晚报1");

sub3.subscribe("晨报2");
sub3.unSubscribe("晨报2");

pub1.publish("晨报1");
pub1.publish("晚报1");
pub2.publish("晨报2");


//晨报1已经送到小明家了
//晨报1已经送到小红家了
//晚报1已经送到小张家了
//晨报2已经送到小红家了
