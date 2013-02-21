var submitedCodes;
var rbEditor = ace.edit("rbEditor");
var jsEditor = ace.edit("jsEditor");
rbEditor.setTheme("ace/theme/solarized_light");
jsEditor.setTheme("ace/theme/solarized_dark");
rbEditor.getSession().setMode("ace/mode/ruby");
jsEditor.getSession().setMode("ace/mode/javascript");
jsEditor.setReadOnly(true);
rbEditor.commands.addCommand({
    name: 'compile',
    bindKey: { win: 'Ctrl-S',  mac: 'Command-S'},
    exec: function(editor) {
      $.post('/ruby_compile', function(d){
        console.log(d);
        console.log(editor.getValue());
      });
      // $.ajax({
      //   type : 'POST',
      //   url : '/ruby_compile',
      //   data : editor.getValue(),
      //   success : function(data){
      //     $('body').html(data);
      //     console.log(data);
      //     console.log("yey!");
      //   },
      //   dataType: 'text',
      //   error : function(){
      //     console.log("oops");
      //   }
      // });
    },
    readOnly: false
});