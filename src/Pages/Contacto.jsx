import { useEffect, useState } from "react";
import { Listbox } from "@headlessui/react";

const tiposProyecto = [
  "Asfaltos",
  "Sellos para Asfaltos",
  "Bacheos",
  "Otros"
];

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombres: "",
    correo: "",
    telefono: "",
    tipoProyecto: "",
    mensaje: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const response = await fetch("https://asfaltoskurmak.cl/api/enviar-correo.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre: formData.nombres,
          correo: formData.correo,
          telefono: formData.telefono,
          tipoProyecto: formData.tipoProyecto,
          mensaje: formData.mensaje,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("¡Mensaje enviado correctamente!");
        setFormData({
          nombres: "",
          correo: "",
          telefono: "",
          tipoProyecto: "",
          mensaje: "",
        });
      } else {
        setStatus("Hubo un error al enviar el mensaje.");
      }
    } catch (error) {
      console.error("Error al enviar:", error);
      setStatus("Error de conexión con el servidor.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 pt-22 p-6 mb-10 bg-white rounded-xl shadow-md">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Contacto
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="nombres"
          value={formData.nombres}
          onChange={handleChange}
          placeholder="Nombres"
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
        />

        <input
          type="email"
          name="correo"
          value={formData.correo}
          onChange={handleChange}
          placeholder="Correo Electrónico"
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
        />

        <input
          type="tel"
          name="telefono"
          value={formData.telefono}
          onChange={handleChange}
          placeholder="Teléfono"
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
        />

        {/* Listbox personalizado */}
        <Listbox
          value={formData.tipoProyecto}
          onChange={(value) =>
            setFormData({ ...formData, tipoProyecto: value })
          }
        >
          <div className="relative">
            <Listbox.Button className="w-full px-4 py-3 rounded-lg bg-[#f3993e] text-white font-semibold text-left hover:bg-[#F59816] focus:outline-none focus:ring-2 focus:ring-orange-500">
              {formData.tipoProyecto || "Selecciona el tipo de proyecto"}
            </Listbox.Button>
            <Listbox.Options className="absolute mt-1 w-full bg-white rounded-lg shadow-lg z-10">
              {tiposProyecto.map((tipo) => (
                <Listbox.Option
                  key={tipo}
                  value={tipo}
                  className={({ active }) =>
                    `cursor-pointer px-4 py-2 ${
                      active
                        ? "bg-[#F59816] text-white font-bold"
                        : "text-gray-800"
                    }`
                  }
                >
                  {tipo}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </div>
        </Listbox>

        <textarea
          name="mensaje"
          value={formData.mensaje}
          onChange={handleChange}
          placeholder="Mensaje"
          rows="5"
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
        ></textarea>

        <button
          type="submit"
          disabled={loading}
          className={`bg-orange-400 text-white font-semibold py-3 rounded-lg transition ${
            loading
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-orange-500"
          }`}
        >
          {loading ? "Enviando..." : "Enviar Mensaje"}
        </button>
      </form>

      {status && (
        <p className="mt-4 text-green-600 font-medium text-center">{status}</p>
      )}
    </div>
  );
};

export default Contacto;
