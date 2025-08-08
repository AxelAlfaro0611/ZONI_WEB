// Configura el número de WhatsApp aquí (sin espacios ni signos, solo el código de país y número)
const whatsappNumber = "51927676365"; // Ejemplo: +57 312 345 6789

// Mensaje para el botón flotante de WhatsApp
const whatsappMessage = "¡Hola! Estoy interesado en comprar un accesorio para motociclista.";
const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

// Asigna el enlace al botón flotante de WhatsApp
document.getElementById("whatsappLink").href = whatsappLink;

// Mensajes personalizados para cada tarjeta
const products = [
    {
        id: "whatsappCard1",
        name: "Cascos Premium",
        message: "¡Hola! Estoy interesado en los Cascos Premium."
    },
    {
        id: "whatsappCard2",
        name: "Chaquetas Protectoras",
        message: "¡Hola! Estoy interesado en las Chaquetas Protectoras."
    },
    {
        id: "whatsappCard3",
        name: "Guantes Ergonómicos",
        message: "¡Hola! Estoy interesado en los Guantes Ergonómicos."
    },
    {
        id: "whatsappCard4",
        name: "Botas Reforzadas",
        message: "¡Hola! Estoy interesado en las Botas Reforzadas."
    },
    {
        id: "whatsappCard5",
        name: "Maletas Laterales",
        message: "¡Hola! Estoy interesado en las Maletas Laterales."
    },
    {
        id: "whatsappCard6",
        name: "Protectores de Rodilla",
        message: "¡Hola! Estoy interesado en los Protectores de Rodilla."
    }
];

// Asigna los enlaces personalizados a cada tarjeta
products.forEach(product => {
    const link = document.getElementById(product.id);
    if (link) {
        link.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(product.message)}`;
    }
});