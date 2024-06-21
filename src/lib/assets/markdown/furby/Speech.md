# Getting the furby to speak

In order for a home assistant to be expressive, it needs a way of communicating with the user, Speech is the obvious choice for most home assistants (e.g Google Home, Siri, Alexa). Not only does it allow for more dynamic form of communicating your needs, it also goes a long way of personalizing the device.

## Google home speech

The google home provides an API to generate responses. In python I was able to write a program that sends the input to the google assistant API and processes the output to provide the voice.

This generates not only the text output, but also the speech. The voice, however, is very google-esque, and diminishes the experience of a talking furby.

In order to try and preserve the illusion, I changes the keyword manually. The furby now responds to a list of keywords:

```py
KEYWORD = ["hey furby", "hi furby", "okay furby", "hello furby", "furby", "hey good taste", "hey toothpaste", "hey kutbeest"]
```

Next i transformed the audio in order to loosly mimic a furby voice. I did this by modifying the sample and playback rate. I iterated on these values until i found a voice i was happy with.

```py
"""
For the FURPECT voice - Jesse 2024
"""

FRAME_RATE = audio_helper.DEFAULT_AUDIO_SAMPLE_RATE * 0.8
PLAYBACK_SAMPLE_RATE = audio_helper.DEFAULT_AUDIO_SAMPLE_RATE * 1.2
```

<div style="display: flex; flex-direction=row; padding: 16px; justify-content: center;">
<video alt="A software demo of a conversation with the furby" width="960" height="480" src="vid/furby/GoogleAssistantDemo.mov" controls>
  <!-- <source src="vid/furby/GoogleAssistantDemo.mp4" type="video/mp4"> -->
</video>
</div>

## Speech module

While the google home provided an assistant framework, it does not give me full control for what the furby says. Since I wanted the furby to demo itself, I would need to use my own speech module.

Most speech modules utilize AI and machine learning for speech synthesis, these options usually require a paid API to access and require me to access the internet. For the purposes of my demonstration I wanted this to be local and non-expensive.

Therefore I decided on a different technology. _Software Automatic Mouth_'s or `SAM`'s, are programs that emulate the phonetic sounds a human can produce in order to mimic speech. These are the simplest forms of speech synthesis.

One of the earliest implementations of these is just called the `SAM` program. This program would take text input, translate it to phonetics, and then produce speech.

I wrote a simple python application that would tell the SAM module to speak out a script, and then send a signal to the arduino tell the furby's eyes to light up. Using this technology I was able to demo the application in the presentation by having furby speak out a script.

<div style="display: flex; flex-direction=row; padding: 16px; justify-content: center;">
<video alt="A demonstration of using SAM in tandem with the furby in order to create the effect of a conversation" width="960" height="480" src="vid/furby/SpeechDemo.mov" controls>
  <!-- <source src="vid/furby/SpeechDemo.mp4" type="video/mp4"> -->
</video>
</div>

## Motor movement

Audio is only one aspect of an assistant speech. Any one who has seen a furby knows that the furby's ability to shuffle around and move its lips is one of the most enjoyable aspects of the little creature.

The furby servos are surprisingly simple to operate. The furby gears can be told to move up and down using a 2 wire setup. The furby moves up or down depending on which wire gets a positive signal and which one gets a negative signal. In theory this could be controlled by supplying an H-bridge with the proper voltage and reversing the signal. I was however not able to implement this in time for the demo, but in theory this could allow for expanding the furby speaking abilities as the motors could simulate speaking the same way the furby's orginal software dows.

<div style="display: flex; flex-direction=row; padding: 16px; justify-content: center;">
<video alt="Manual control of the furby's servos" width="960" height="480" src="vid/furby/ServoControlDemo.mov" controls>
  <!-- <source src="vid/furby/ServoControlDemo.mp4" type="video/mp4"> -->
</video>
</div>
