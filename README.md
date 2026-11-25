[![make.fun · u-hamsyh-funniest-one-line-out-of-office-reply-5490c1c8](https://make.fun/badge/u-hamsyh-funniest-one-line-out-of-office-reply-5490c1c8.svg)](https://make.fun/bounty/u-hamsyh-funniest-one-line-out-of-office-reply-5490c1c8?utm_source=github&utm_medium=readme&utm_campaign=u-hamsyh-funniest-one-line-out-of-office-reply-5490c1c8)
[![rank](https://make.fun/badge/u-hamsyh-funniest-one-line-out-of-office-reply-5490c1c8/Skyzo07/funniest-one-line-ooo-reply/rank.svg)](https://make.fun/bounty/u-hamsyh-funniest-one-line-out-of-office-reply-5490c1c8/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-hamsyh-funniest-one-line-out-of-office-reply-5490c1c8)
[![reward](https://make.fun/badge/u-hamsyh-funniest-one-line-out-of-office-reply-5490c1c8/Skyzo07/funniest-one-line-ooo-reply/reward.svg)](https://make.fun/bounty/u-hamsyh-funniest-one-line-out-of-office-reply-5490c1c8?utm_source=github&utm_medium=readme&utm_campaign=u-hamsyh-funniest-one-line-out-of-office-reply-5490c1c8)

# Funniest One-Line Out-of-Office Reply

> I'm on leave until Monday. If it's urgent, it can wait; if it can wait, it wasn't urgent.

The joke is a trap the sender sets for their own inbox. It opens exactly like a real auto-reply — on leave, back Monday — and then quietly redefines "urgent" out of existence: anything that can wait was never urgent, and anything truly urgent apparently still has to wait until Monday. The sender sounds perfectly reasonable while granting themselves a full week of not caring, and the punchline needs no explanation because everyone who has ever sent an "urgent" email recognises the argument instantly. It is the whole out-of-office message, not a notice with a joke bolted on.

## Run it

```sh
MAKEFUN_OUTPUT_DIR=output node main.ts
```

This writes the one-line reply to `output/entry.txt` — exactly 89 characters, a single non-blank line, no trailing newline — after a gate check (1–160 characters, single line, not only whitespace) and a read-back verification that the file on disk is byte-identical to the entry.
