---
uid: Meadow.Foundation.Grove.Leds.LEDSocket

---

| LEDSocket | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation.Grove/tree/main/Source/LEDSocket) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Grove.Leds.LEDSocket/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Grove.Leds.LEDSocket.svg?label=Meadow.Foundation.Grove.Leds.LEDSocket" alt="NuGet Gallery for Meadow.Foundation.Grove.Leds.LEDSocket" /></a> |

### Code Example

```csharp
LEDSocket led;

public override Task Initialize()
{
    Resolver.Log.Info("Initialize...");

    led = new LEDSocket(Device.Pins.D13);

    return Task.CompletedTask;
}

public override Task Run()
{
    led.StartBlink();

    return Task.CompletedTask;
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation.Grove/tree/main/Source/LEDSocket/Sample/LEDSocket_Sample)

### Wiring Example

| LEDSocket | Meadow Pin |
|--------|------------|
| GND    | GND        |
| VCC    | 3.3V       |
| RX     | D01        |
| TX     | D00        |
