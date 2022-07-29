---
layout: Meadow
title: Automatic Restarts
subtitle: Enabling and using the Meadow systems for handling application crashes or unresponsiveness with automatic restarts and watchdog timers.
---

Meadow offers two systems to handle when your code doesn't behave as expected. If your application throws an unhandled exception, there is an automatic restart system for when your app doesn't recover from an error. If you have some code that might become unresponsive, there is a watchdog timer system to reset the device if some part of your code execution takes too long.

## Application Error Restart

If your application fails with an unhandled exception, Meadow can offer to detect this and relaunch your application. You can enable this feature and set a custom delay before any restart by configuring the `Lifecycle` application settings.

These settings are added to a YAML or JSON configuration file. Learn more about configuring automatic restarts for your Meadow applications in [application settings configuration](/Meadow/Meadow.OS/Configuration/Application_Settings_Configuration).

```yml
Lifecycle:
    ResetOnAppFailure: true
    AppFailureRestartDelaySeconds: 15
```

## Watchdog Timer

In addition to restarting when an unhandled exception occurs, you can also use the watchdog timer to restart the device if your application becomes unresponsive. This increases solution reliability by making sure that if the application code runs longer than expected, the device is rebooted and the application can start operating again.

To use the watchdog timer, first enable it, passing a countdown timeout TimeSpan which specifies how long you have to reset the countdown before the device is restarted.

Then, prior to the countdown elapsing, you must reset the countdown to prevent the device from restarting.

### Enable the Watchdog Timer

Start by enabling the Meadow watchdog system.

```csharp
// Enable the watchdog for 10 seconds.
Device.WatchdogEnable(TimeSpan.FromSeconds(10));
// Start the thread that resets the counter.
StartPettingWatchdog(TimeSpan.FromSeconds(9));
```

### Reset the Timer

Then, later in your code, you need to reset the watchdog before the required interval to prevent the device from restarting.

```csharp
void StartPettingWatchdog(TimeSpan pettingInterval)
{
    // Just for good measure, let's reset the watchdog to begin with.
    Device.WatchdogReset();
    // Start a thread that restarts it.
    Thread t = new Thread(() => {
        while (true) {
            Thread.Sleep(pettingInterval);
            Console.WriteLine("Petting watchdog.");
            Device.WatchdogReset();
        }
    });
    t.Start();
}
```

### Use Watchdog Timer Outside App

The current `Device` property is available from within your `App` instance. If you want to use the watchdog system from outside your application class, you can find the current device from the `Resolver` class.

```csharp
Resolver.Device.WatchdogEnable(TimeSpan.FromSeconds(10));
```