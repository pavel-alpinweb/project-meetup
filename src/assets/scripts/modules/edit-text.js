export default function editText(formName){
    var newText = {};
    newText.title = $(formName).find('[data-input="title"]').val();
    newText.text = $(formName).find('[data-input="text"]').val();
    if($(formName).find('[data-input="link"]').length > 0){
        newText.link = $(formName).find('[data-input="link"]').val();
    }
    console.log(newText); 

    return newText;
}