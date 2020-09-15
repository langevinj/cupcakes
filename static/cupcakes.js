$('.delete-cupcake').click(deleteCupcake)

async function deleteCupcake(){ 
    const id = $(this).data('id')
    await axios.delete(`/api/cupcakes/${id}`)
    $(this).parent().remove()
}

$('.create-cupcake').click(async function(evt) {
    evt.preventDefault()

    let $inputs = $('#new-cupcake input');
    let dict = createDict($inputs)

    await axios.post(`/api/cupcakes`, json=dict)
    location.reload();
});

//turns the input values into a json readable dictionary
function createDict($inputs){
    let values = {};
    $inputs.each(function () {
        if ($(this).val() != "") {
            values[this.name] = $(this).val()
        }
    });

    if (!values.hasOwnProperty("image")){
        values["image"] = "";
    }
    return values
}
