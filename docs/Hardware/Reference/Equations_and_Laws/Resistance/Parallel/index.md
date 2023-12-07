---
layout: Hardware
title: Parallel Resistance
subtitle: Calculating total resistance when resistors are connected side-by-side.
---

## Quick Reference

### Parallel Resistance Calculation

```text
TotalR = 1 / ∑(1 / Rn...Rn)
```

## More Info

Resistors (or resistances) can be arranged in parallel, as in the following diagram:

![Diagram of parallel resistors, R1, R2, and R3, all connected to the positive and negative leads of a source voltage.](../../../../Tutorials/Electronics/Part4/Resistors_in_Parallel.svg){:standalone}

### Conductance; the Siemens (S)

When resistors are arranged in this configuration, their total resistance is calculated by adding up the _conductance_, measured in _siemens_ (S), which is defined as the reciprocal of resistance:

`Siemens = 1 / Resistance in Ω`

The letter `G` is often used to denote conductance/siemens, so the units calculate as follows:

```text
G = 1/R
R = 1/G
```

### Calculation

Therefore, total resistance is calculated by:

```text
TotalR = 1 / ∑(1 / Rn...Rn)
```

### Calculation Steps

To calculate the resistance of a parallel resistor network, we have to:

 1. Convert each individual resistance to conductance
 2. Add the conductances together
 3. Convert the sum back to resistance

#### Example

Let's consider the same resistor values we had in series, and calculate them in parallel:

* R1 - 100Ω
* R2 - 5Ω
* R3 - 1KΩ

First, we need to convert each value to siemens:

```text
G1 = 1/100Ω = 0.01 S
G2 = 1/5Ω = 0.2 S
G3 = 1/1KΩ = 1/1000Ω = 0.001 S
```

Once we have their conductance, we add them to get the total conductance:

```text
0.01 + 0.2 + 0.001 = 0.211 S
```

Converting from `0.211` siemens to ohms:

```text
Resistance = 0.211 S = 1/0.211 = 4.74Ω
```

Total resistance with the same resistors as we had in series is now `4.7Ω` in parallel.

## Parallel Resistor Banks

Sometimes, resistors in parallel come in banks of the same resistor values. In this case, there's a shortcut to calculate the total resistance:

```text
Total Resistance = Resistance of Each Resistor / Number of Resistors
```

Therefore, (10), 5KΩ resistors in parallel would be:

```text
5,000Ω / 10 = 500Ω
```

## Common Voltage, Different Current

In a parallel resistance circuit, the voltage at each resistor is the same, but the current flowing through each resistor is dependent on the amount of resistance that resistor has.

### Power Calculation

Since we know the voltage and resistance, we can use the `P = V^2 / R` form of the power calculation equation, and just as with series resistance, we add an `n` to specify power and resistance at resistor number `n`:

```text
Pn = V^2 / Rn
```

## Further Reading

For a more in-depth discussion about resistors and resistance, check out [Part 4 of the Electronics Tutorial](../../../../Electronics/Part4/Resistance/).
