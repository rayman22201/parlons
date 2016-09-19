# parlons
A CLI Node multi-protocol chat app
Parlons is "We speak" en Francais.
Also, "Parlons Chat" is "we talk cat" in French, which is terrible French grammar but a hilarious translation non-the-less.
There always needs to be more Cats on the internet!
Built using Blessed, React, Redux, and a whole bunch of node modules.

### Why?
tldr;
Node as all the parts, I love Javascript, and I was unsatisfied with my other options, so this thing is born.

A long time ago, in a nerd's house far far away,
I had a problem. too many chat protocols. Gchat, Slack, hipchat, facebook messenger, irc... the list goes on.
My first attempt at solving this problem involved the Bitblebee irc bridge and Weechat running on a raspberry pi that I
could ssh into. This worked extremely well, until I bricked my raspian install (long story).

After that I tried Franz. Franz is good for what it is, but pales in comparison to a good terminal interface.

I could set up bitlebe and weechat again, but then I thought:
- A single Node CLI app would be much simpler than an IRC bridge that has to run on a server; less moving parts, less things to break.
- NPM has a pretty strong ecosystem of packages for all the popular chat clients, most of which have apis.
- I saw Blessed and React-Blessed a while back on Hacker News, and have been looking for an excuse to play with those libraries.
- Ever since I discoverd Redux, Dan Abramov has been one of my programmer heros. This is an excuse to do some redux in a weird place.
- Mr. Abramov, our lord and high priest of Redux, savior of the functional react paradigm, has experimented with React-Blessed, and I can only attempt to follow in his footsteps of greatness :-P
