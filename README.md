# ko-custom-bindings
Custom bindings that can make live easier

# Skip binding

You can use this binding for skip bindings if you want to bind it yourself in your code. A common case is if you want to integrate html code that contains other ko bindings. You can find a good documentation of it at [Quick Tip: Telling Knockout to Skip Binding Part of a Page](http://www.knockmeout.net/2012/05/quick-tip-skip-binding.html), the author is a team member from the knockout developer team.

# Stop Bubble

You can prevent event bubbling if you using the checked binding. A common case is if you have a click binding and a child element has a checked binding, so if you activate the checked binding it will bubble up and trigger the click binding. So you have to set the stopBubble binding to prevent this behavior. 
