---
uid: Meadow.Foundation.Audio.PiezoSpeaker
remarks: *content
---

| PiezoSpeaker | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Core/Speakers) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.svg?label=Meadow.Foundation" alt="NuGet Gallery for Meadow.Foundation" /></a> |

The **PiezoSpeaker** class represents a piezoelectric speaker that can be used to generate tones across a range of frequencies. They typically perform well between 1-5kHz but may go as high as 100kHz. PiezoSpeaker Implements IToneGenerator.

The positive pin of the piezo speaker connects to a pulse width modulation (PWM) capable pin on the Meadow and the negative pin connects to common/ground. A resistor can be placed in-line to reduce volume.

![Piezo Speakers](../../API_Assets/Meadow.Foundation.Audio.PiezoSpeaker/img_PiezoSpeaker.jpg)

### Code Example

```csharp
protected PiezoSpeaker piezoSpeaker;

public override Task Initialize()
{
    Resolver.Log.Info("Initializing...");

    piezoSpeaker = new PiezoSpeaker(Device.CreatePwmPort(Device.Pins.D05, new Frequency(100, Frequency.UnitType.Hertz)));

    return Task.CompletedTask;
}

public override async Task Run()
{
    for (int i = 0; i < 5; i++)
    {
        Resolver.Log.Info("Playing A major triad starting at A4");
        await piezoSpeaker.PlayTone(new Frequency(440, Frequency.UnitType.Hertz), TimeSpan.FromMilliseconds(500)); //A
        await piezoSpeaker.PlayTone(new Frequency(554.37f, Frequency.UnitType.Hertz), TimeSpan.FromMilliseconds(500)); //C#
        await piezoSpeaker.PlayTone(new Frequency(659.25f, Frequency.UnitType.Hertz), TimeSpan.FromMilliseconds(500)); //E

        await Task.Delay(2500);
    }
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Core.Samples/Audio.PiezoSpeaker_Sample)

### Wiring Example

![Wiring a Piezo Speaker to a Meadow F7](../../API_Assets/Meadow.Foundation.Audio.PiezoSpeaker/PiezoSpeaker_Fritzing.svg)
