---
layout: Meadow
title: Application Settings Configuration
sidebar_label: App Settings Configuration
subtitle: Adding application settings at build-time for lifecycle, logging, or custom settings.
---

The `app.config.yaml` file can be used to configure application settings for logging, enabling Meadow.Cloud features and reboot configuration. You can also add custom developer application settings.

Remember to set **Copy to Output Directory** to `Copy always` in the properties pane of any configuration files.

### Lifecycle Configuration - Automatic Reboot

If you need Meadow to relaunch your app should it fail, the `Lifecycle` settings allow you to configure that behavior.

First, set `RestartOnAppFailure` to true. Then, you can optionally configure a delay, in seconds, before restart using the `AppFailureRestartDelaySeconds` setting.

For example, to configure Meadow to wait 15 seconds after a failure before rebooting your application, the syntax should look like this:

```yml
Lifecycle:
    RestartOnAppFailure: true
    AppFailureRestartDelaySeconds: 15
```

### Logging Configuration

Logging configuration allows you to customize the level of data your Meadow application will log to its output channel.

The log level default aligns with the .NET options: `Trace`, `Debug`, `Information`, `Warning`, and `Error`.

```yml
Logging:
    LogLevel:
        Default: "Trace"
```

### Enable Meadow.Cloud features and Over-the-Air (OtA) updates

To allow Meadow.Cloud basic features (Logging, Events and Command + Control) and over-the-air (OtA) updates to your Meadow application, add the following configuration to your application's `app.config.yaml` file:

```yaml
# Meadow.Cloud configuration.
MeadowCloud:

    # Enable Logging, Events, Command + Control
    Enabled: true

    # Enable Over-the-air Updates
    EnableUpdates: true

    # Enable Health Metrics
    EnableHealthMetrics: true

    # How often to send metrics to Meadow.Cloud
    HealthMetricsIntervalMinutes: 15
```

You can learn more about enabling and responding to OtA updates in your Meadow application from the [Over-the-Air Updates documentation](/Meadow/Meadow.OS/Updates/).

### Custom Developer Application Settings

The `IApp` interface now has a `Settings` property which you can use to add your own custom settings.

```csharp
public Dictionary<string, string> Settings { get; }
```

This property gets populated by any settings found in `app.config.yaml` that are not used by Meadow.Core. You’ll notice that the property is a `Dictionary<string, string>`. How does that translate from your custom settings? The key is a dot-notated “path” to the property name, and the value is always the string representation directly from the settings file.

So if you add the following section to your `app.config.yaml` file:

```yaml
MyApp:
  PollInterval: 5
  Network:
    Name: MyDevice
```

You would end up with 2 items in the `Settings` property at run time:

```csharp
"MyApp.PollInterval", "5"
"MyApp.Network.Name", "MyDevice"
```

Meadow is already parsing `app.config.yaml` for its own settings, so retrieving these values in this format is effectively free. Meadow, however, does not attempt to parse the values to any underlying type (like int, etc), nor does it support converting the values to a type-safe object because reflection on the F7 microcontroller can be a costly operation and we’d rather leave the decision to use it up to the user.

## Sample Apps

For an example of configuration in use, see the [Config Files sample App](https://github.com/WildernessLabs/Meadow.Samples/tree/main/Source/Meadow%20F7/OS/ConfigFiles) in the `Meadow.Samples` repo.

<table>
  <tbody>
    <tr>
      <td style={{ width: "50%" }}>
        <img
          alt="Photo showing a Meadow hooked up to an LCD displaying the date, time, indoor and outdoor temperature and a weather icon."
          src="../../../../Common_Files/Hackster/GraphicsWeather.jpg"
        />
      </td>
      <td style={{ width: "50%", fontSize: 20 }}>
        <p style={{ fontSize: 22 }}>
          <a
            style={{ fontSize: 25 }}
            href="https://www.hackster.io/wilderness-labs/weather-station-using-public-web-service-using-meadow-e47765">
            Weather Station Using Public Web Service Using Meadow
          </a>
          <br />
          Learn how to connect your Meadow to your local network and get current
          weather conditions from a free public weather web service.
        </p>
      </td>
    </tr>
    <tr>
      <td style={{ width: "50%" }}>
        <img
          alt="Video showing a vertical LED matrix showing the current date and then the current time when a button is pressed."
          src="../../../../Common_Files/Hackster/RtcWifi.gif"
        />
      </td>
      <td style={{ width: "50%" }}>
        <p style={{ fontSize: 22 }}>
          <a
            style={{ fontSize: 25 }}
            href="https://www.hackster.io/wilderness-labs/build-a-wifi-connected-clock-using-meadow-e0c6b6">
            Build a WIFI Connected Clock Using Meadow
          </a>
          <br />
          Build this nifty clock with Meadow getting the date and time from an
          NTP server via WIFI and room temperature with an LM35 Analog sensor.
        </p>
      </td>
    </tr>
    <tr>
      <td style={{ width: "50%" }}>
        <img
          alt="Video showing a Meadow connected to a multi-line character display showing the date, time, indoor and outdoor temperatures, and a weather description."
          src="../../../../Common_Files/Hackster/WifiWeather.gif"
        />
      </td>
      <td style={{ width: "50%" }}>
        <p style={{ fontSize: 22 }}>
          <a
            style={{ fontSize: 25 }}
            href="https://www.hackster.io/wilderness-labs/make-a-meadow-indoor-outdoor-temperature-weather-desk-clock-463839">
            Make a Meadow indoor/outdoor temperature/weather desk clock
          </a>
          <br />
          Build this nifty clock for your desk that gives you time and date,
          along with room and outdoor temperature using a REST service.
        </p>
      </td>
    </tr>
  </tbody>
</table>