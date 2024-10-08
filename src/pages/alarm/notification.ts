import { LocalNotifications } from '@capacitor/local-notifications';

class Notifications {
  public async schedule(hour: number, minute: number) {
    try {
      // Request/ check permissions
      // if (!(await LocalNotifications.requestPermissions()).granted) return;

      // Clear old notifications in prep for refresh (OPTIONAL)
      const pending = await LocalNotifications.getPending();
      if (pending.notifications.length > 0)
        await LocalNotifications.cancel(pending);

      await LocalNotifications.schedule({
        notifications: [{
          title: 'Triumph30',
          body: 'Alarm',
          id: 1,
          schedule: {
            on: { // swap this out for at or every as needed
              hour,
              minute
            }
          }
        }]
      });
    } catch (error) {
      console.error(error);
    }
  }
}

export default new Notifications()