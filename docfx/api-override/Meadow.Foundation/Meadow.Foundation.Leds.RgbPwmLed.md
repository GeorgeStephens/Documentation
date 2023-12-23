---
uid: Meadow.Foundation.Leds.RgbPwmLed

---

| RgbPwmLed | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Core/Leds) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.svg?label=Meadow.Foundation" alt="NuGet Gallery for Meadow.Foundation" /></a> |

**RgbPwmLed** represents an RGB LED whose color is controlled by the duty-cycle of three PWM signals. Can be used both with LEDs that have been current limited with in-series resistors, or LEDs without resistors.

Controlling an RGB LED via a PWM signal is more power efficient than using a current-limiting resistor, and it provides more control; allowing thousands of different colors, as opposed to the 8 colors of non-PWM powered RGB LED.

To use without resistors, pass in the forward voltages (voltage drop) of each of the LED components to the `redLedForwardVoltage`, `greenLedForwardVoltage`, and `blueLedForwardVoltage`, constructor parameters, and the class will limit its output to the maximum forward voltage rating for those LEDs.

To use with an LED that has a resistor in series, pass `0.0` or `TypicalForwardVoltage.ResistorLimited` for the `forwardVoltage` parameter.

### Code Example

```csharp
RgbPwmLed onboardLed;

public override Task Initialize()
{
    Resolver.Log.Info("Creating peripherals...");

    onboardLed = new RgbPwmLed(
        Device.Pins.OnboardLedRed,
        Device.Pins.OnboardLedGreen,
        Device.Pins.OnboardLedBlue);

    return Task.CompletedTask;
}

public override Task Run()
{
    return TestColors();
}

public async Task TestColors()
{
    while (true)
    {
        Resolver.Log.Info("SetColor(RgbLedColors.Red);");
        onboardLed.SetColor(Color.Red);
        await Task.Delay(3000);

        Resolver.Log.Info("StartPulse();");
        await onboardLed.StartPulse();
        await Task.Delay(3000);

        Resolver.Log.Info("StartPulse(RgbLedColors.Green);");
        await onboardLed.StartPulse(Color.Green);
        await Task.Delay(3000);

        Resolver.Log.Info("SetColor(RgbLedColors.Yellow);");
        onboardLed.SetColor(Color.Yellow);
        await Task.Delay(3000);

        Resolver.Log.Info("StartPulse(RgbLedColors.Cyan, 200, 200);");
        await onboardLed.StartPulse(Color.Cyan, TimeSpan.FromMilliseconds(400));
        await Task.Delay(3000);

        await onboardLed.StopAnimation();
    }
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Core.Samples/Leds.RgbPwmLed_Onboard_Sample)

### Wiring Example

![](/docs/API_Assets/Meadow.Foundation.Leds.RgbPwmLed/RgbPwmLed_Fritzing.svg)
