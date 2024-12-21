import React, { useState, useEffect } from "react";
import Lottie from "react-lottie";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import animationData from "../../assets/animations/MAIN.json";

const ContactForm = ({ isOpen, closeModal }) => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [contact, setContact] = useState("");

    const botToken = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
    const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID;

    const handleSubmit = async (e) => {
        e.preventDefault();

        const message = `
        Новая заявка:
        Имя: ${name}
        Телефон: ${phone}
        Контакт: ${contact}
    `;

        try {
            const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    chat_id: chatId,
                    text: message,
                }),
            });

            if (response.ok) {
                toast.success("Заявка успешно отправлена! Мы скоро с вами свяжемся.");

                // Очистка полей формы
                setName("");
                setPhone("");
                setContact("");

                // Закрытие модалки с анимацией
                setTimeout(() => {
                    closeModal();
                }, 300); // Добавляем задержку для плавного завершения анимации
            } else {
                toast.error("Ошибка при отправке заявки. Попробуйте снова.");
            }
        } catch (error) {
            console.error("Ошибка:", error);
            toast.error("Ошибка при отправке. Проверьте подключение к интернету.");
        }
    };

    const handleOutsideClick = (e) => {
        if (e.target.id === "modal-overlay") {
            closeModal();
        }
    };

    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === "Escape") {
                closeModal();
            }
        };
        document.addEventListener("keydown", handleEscape);

        return () => {
            document.removeEventListener("keydown", handleEscape);
        };
    }, []);

    return (
        <>
            {/* Контейнер для Toast */}
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />

            <motion.div
                id="modal-overlay"
                onClick={handleOutsideClick} // Закрытие при клике на фон
                className={`fixed inset-0 bg-black bg-opacity-50 z-50 ${isOpen ? "block" : "hidden"}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: isOpen ? 1 : 0 }}
                transition={{ duration: 0.3 }}
            >
                <div className="flex justify-center items-center w-full h-full">
                    <div className="bg-neutral-900 p-8 rounded-lg shadow-lg max-w-2xl w-full relative">
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 text-white text-3xl font-bold"
                        >
                            ×
                        </button>

                        <div className="flex flex-col md:flex-row items-center gap-8">
                            <div className="w-full md:w-1/3 flex justify-center items-center">
                                <Lottie
                                    options={{
                                        loop: true,
                                        autoplay: true,
                                        animationData: animationData,
                                        rendererSettings: {
                                            preserveAspectRatio: "xMidYMid slice",
                                        },
                                    }}
                                    height={200}
                                    width={200}
                                />
                            </div>

                            <div className="w-full md:w-2/3 p-4">
                                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                                    Оставьте ваши контакты
                                </h2>
                                <p className="text-lg sm:text-xl text-neutral-400 mb-6">
                                    Мы с вами свяжемся в ближайшее время, чтобы обсудить подробности и ответить на все вопросы.
                                </p>
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-4">
                                        <label htmlFor="name" className="block text-sm text-gray-300">
                                            Ваше имя
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            className="w-full p-3 mt-2 border border-gray-300 rounded-md"
                                            required
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="phone" className="block text-sm text-gray-300">
                                            Номер телефона
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                            className="w-full p-3 mt-2 border border-gray-300 rounded-md"
                                            required
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="contact" className="block text-sm text-gray-300">
                                            Телеграм/WhatsApp
                                        </label>
                                        <input
                                            type="text"
                                            id="contact"
                                            value={contact}
                                            onChange={(e) => setContact(e.target.value)}
                                            className="w-full p-3 mt-2 border border-gray-300 rounded-md"
                                            required
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-md text-lg transition duration-200"
                                    >
                                        Отправить заявку
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    );
};

export default ContactForm;
