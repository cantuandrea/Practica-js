function verImagen() {
    let num  = parseInt(document.getElementById("num").value);
    let imagen = document.getElementById('img');

    switch (num) {
        case 1:
            imagen.src = "";
            break;
        case 2:
            imagen.src = "https://concepto.de/wp-content/uploads/2015/05/Navidad-e1547047735822.jpg";
            break;
        case 3:
            imagen.src = "https://blog.hunteet.com/wp-content/uploads/2017/10/Decoracion-de-Halloween-1024x680.jpg";
            break;
        case 4:
            imagen.src = "https://media.admagazine.com/photos/61f355309b19d943aa117bcf/16:9/w_2560%2Cc_limit/regalos%2520san%2520valentin.jpg";
            break;
        case 5:
            imagen.src = "https://www.quadratin.com.mx/www/wp-content/uploads/2020/10/CP_Michoacan-y-su-dia-de-muertos-1160x700.jpg";
            break;
        default:
            break;
    }
}