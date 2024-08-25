export const connectViaWhatsApp = (phoneNumber,message) =>{
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        message
      )}`;
      window.open(whatsappLink);
}
export const connectViaTelephone = (phoneNumber) =>{
    window.location.href = `tel:${phoneNumber}`;
}