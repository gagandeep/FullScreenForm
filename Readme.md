FullScreenForm
==============
FullScreenForm is one of the way to represent form to user in interesting way. In this way, one field at a time displayed on full screen to user. FullScreenForm is flexible enough to display even multiple fields at a time to user. FullScreenForm don't assume anything about your css or form elements. Its upto you to decorate elements to suit your need. There is one example implementation in index.html, so see the source Luke.

Initialization
--------------
FullScreenForm is as simple as
```
<link rel="stylesheet" href="fullscreen-form.css">
<script type="text/javascript" src="fullscreen-form.js"></script>
$(document).ready(function(){
    $("#testForm").fullScreenForm();
}
```

Example Form
------------
```
<form class="row" id="testForm">
  <div class="form-group" data-show-next="false">
    <label>
      <img src="http://placehold.it/150x150?text=1">
      <input type="radio" name="fb" value="small"  onchange="jQuery.gotonext()"/>
    </label>
    <label>
      <img src="http://placehold.it/150x150?text=2">
      <input type="radio" name="fb" value="large" onchange="$.gotonext()" />
    </label>
    <label>
      <img src="http://placehold.it/150x150?text=3">
      <input type="radio" name="fb" value="large2" onchange="$.gotonext()" />
    </label>
  </div>
  <div class="form-group">
    <label for="exampleInputEmail" class="">What is your Location?</label>
    <select class="js-example-basic-single" multiple="multiple">
      <option value="AL">Alabama</option>
      <option value="WY">Wyoming</option>
    </select>
  </div>
  <div class="form-group">
    <label for="exampleInputEmail" class="">What is your Location?</label>
    <select class="js-example-basic-single">
      <option value="AL">Alabama</option>
      <option value="WY">Wyoming</option>
    </select>
  </div>
  <div class="form-group" data-show-next="true">
    <label for="exampleInputEmail" class="">What is your Email address?</label>
    <input type="email" class="form-control" name="exampleInputEmail" id="exampleInputEmail1" placeholder="">
    <p class="help-block">Example block-level help text here.</p>

  </div>
  <div class="form-group">
    <label for="exampleInputPassword">Set your Password</label>
    <input type="password" class="form-control" name="exampleInputPassword" id="exampleInputPassword1" placeholder="Password">
  </div>
  <div class="form-group">
    <label for="exampleInputFile">File input</label>
    <input type="file" id="exampleInputFile" name="exampleInputFile">
    <p class="help-block">Example block-level help text here.</p>
  </div>
  <div class="form-group">
    <input type="submit" name="submit" value="Submit">
  </div>
</form>
```

By default, FullScreenForm display content of `form-group` class, one by one. However you could define your own selector. As defined in Configurations section below.

Configurations
--------------
It provide you with some configurations too,
```
$("#testForm").fullScreenForm({
            'color':'#ffffff',
            'background': '#111111',
            'selector':'form-group'
        });
```

Animation Support
-----------------
Full screen forms will always UI thing to grab user attention. So, FullScreenForm also support Animate.css so that you could show FullScreenForm with cool animations.


Participate
-----------
I will encourage others to raise PR request and feature request through Github issues.

ToDo
----
    - Check if, FullScreenForm could work without jquery.
    - More Examples

License
-------
This library is available under MIT license so you could use it in whatever way you want.

References
----------
I think first major advancement to FullScreenForm goes to https://github.com/codrops/FullscreenForm, however that library is not as flexible and give only limit set of elements to play with. In our case, you could use anything you wanted.

