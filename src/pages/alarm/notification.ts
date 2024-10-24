import { LocalNotifications } from '@capacitor/local-notifications';
import moment from "moment";

class Notifications {
  public async schedule(id: number, time: Date, repeat: boolean, repeatTime: number, repeatCategory: any, label: any) {
    try {
      let alarm = time;
      if(repeat) {
        alarm = moment().add(repeatTime, repeatCategory).toDate();
      }
      await LocalNotifications.schedule({
        notifications: [{
          title: 'Tanpa Pintu',
          body: label,
          id: id,
          schedule: {
            at: alarm,
            repeats: repeat,
            allowWhileIdle: true,
          },
          channelId: 'alarm',
          autoCancel: true
        }]
      });
    } catch (error) {
      console.error(error);
    }
  }
  public async update(id: number, time: Date, repeat: boolean, repeatTime: number, repeatCategory: any, label: any) {
    try {
      await this.cancel(id);
      
      let alarm = time;
      if(repeat) {
        alarm = moment().add(repeatTime, repeatCategory).toDate();
      }
      await LocalNotifications.schedule({
        notifications: [{
          title: 'Tanpa Pintu',
          body: label,
          id: id,
          schedule: {
            at: alarm,
            repeats: repeat,
            allowWhileIdle: true,
          },
          channelId: 'alarm',
          autoCancel: true
        }]
      });
    } catch (error) {
      console.error(error);
    }
  }
  public async cancel(id: number) {
    try {
      await LocalNotifications.cancel({
        notifications: [{
          id: id
        }]
      });
    } catch (error) {
      console.error(error);
    }
  }
}

export default new Notifications()