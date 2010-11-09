# jQuery Validate Form

I reinvented the wheel on this because the available solutions didn't work
how I needed.

## Usage

    $(document).ready(function() {
      $('#myform').validateForm();
    });

    <form id="myform">
      <p>Name <input type="text" name="name" class="validate" /></p>
      <p>Email <input type="text" name="email" class="validate" /></p>
      <p><input type="submit" name="submit" /></p>
    </form>


When the form is submitted, it will loop through each form element
with `class="validate"`. If any are blank, the form will not be
submitted.

# License

See LICENSE in this repo.
