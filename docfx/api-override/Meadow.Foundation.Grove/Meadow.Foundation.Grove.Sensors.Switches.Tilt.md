---
uid: Meadow.Foundation.Grove.Sensors.Switches.Tilt
remarks: *content
---

| Tilt | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen"/> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation.Grove/tree/main/Source/Tilt) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Grove.Sensors.Switches.Tilt/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Grove.Sensors.Switches.Tilt.svg?label=Meadow.Foundation.Grove.Sensors.Switches.Tilt" /></a> |

### Code Example

```csharp
public MeadowApp()
{
    Console.WriteLine("Initialize hardware...");

    var tiltSwitch = new Tilt(Device, Device.Pins.D13);

    tiltSwitch.Changed += (s, e) =>
    {
        Console.WriteLine(tiltSwitch.IsOn ? "Switch is High" : "Switch is Low");
    };
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation.Grove/tree/main/Source/Tilt)

### Wiring Example

| Tilt | Meadow Pin |
|--------|------------|
| GND    | GND        |
| VCC    | 3.3V       |
| RX     | D01        |
| TX     | D00        |















