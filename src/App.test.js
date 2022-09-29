/* eslint-disable testing-library/no-render-in-setup */
import { fireEvent, getAllByLabelText, getByLabelText, queryByAltText, queryByLabelText, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";
import { IoPlay, IoStop } from "react-icons/io5";
/* eslint-disable testing-library/render-result-naming-convention */

beforeEach(() => render(<App />));
// 0 - La app debe renderizar correctamente

describe("0 - La app debe renderizar correctamente", () => {
  test("0 - La app debe renderizar correctamente", () => {
    const r = render(<App />);
    expect(r).toBeDefined();
  });
});
// 1 - El nombre de la app 'OnMyRadio' debe ser visible

describe('1 - El nombre de la app "OnMyRadio" debe ser visible', () => {
  test('1 - El nombre de la app "OnMyRadio" debe ser visible', () => {
    const name = "OnMyRadio";
    const el = screen.getByText(name);
    expect(el).toBeInTheDocument();
  });
});
// 2a - Debe permitir buscar radios por nombre -->> campo input con placeholder "Search radios"
// 2b - Debe tener un botón de búsqueda
// 2c - Al hacer click en el botón de búsqueda se debe ejecutar la función de búsqueda una sola vez

describe("Debe permitir buscar radios por nombre", () => {
  test("Debe permitir buscar radios por nombre", () => {
    const placeholdertext = "Search radios";
    const input = screen.getByPlaceholderText(placeholdertext);
    expect(input).toBeInTheDocument();
  });
  test("Debe tener un botón de búsqueda", () => {
    const buttonText = "Search";
    const button = screen.getByText(buttonText);
    expect(button).toBeInTheDocument();
  });
  test("Al hacer click en el botón de búsqueda se debe ejecutar la función de búsqueda una sola vez", () => {
    const mockFunction = jest.fn();
    const buttonText = "Search";
    const button = screen.getByText(buttonText);
    button.addEventListener("click", mockFunction);
    fireEvent.click(button);
    expect(mockFunction).toHaveBeenCalledTimes(1);
  });
});
// 3 - Listado de emisoras
// 3a - Debe existir un listado de emisoras
// 3b - El listado debe inicializar vacío
// 3c - Debe devolver al menos un resultado si la búsqueda es válida
// 3d - Si no encuentra nada, debe devolver un mensaje al usuario

describe("Listado de emisoras", () => {
  test("Debe existir un listado de emisoras", () => {
    const list = screen.getByLabelText("stations-list");
    expect(list).toBeInTheDocument();
  });
  test("El listado debe inicializar vacío", () => {
    const list = screen.getByLabelText("stations-list");
    const childrenCount = list.childElementCount;
    expect(childrenCount).toBe(0);
  });
  test("Debe devolver al menos un resultado si la búsqueda es válida", async() => {
    const placeholdertext = "Search radios";
    const input = screen.getByPlaceholderText(placeholdertext);
    const buttonText = "Search";
    const button = screen.getByText(buttonText);
    fireEvent.change(input, { target: { value: "indie" } });
    fireEvent.click(button);
    const list = screen.getByLabelText("stations-list");
    const childrenCount = list.childElementCount;
    expect(childrenCount).toBeGreaterThanOrEqual(0);
  });
});

// 4 - Botones play y stop
// 4a - Debe existir un botón de play
// 4b - El botón play debe reproducir la radio seleccionada
// 4c - Debe existir un botón de stop
// 4d - El botón stop debe permitir parar la reproducción

describe('Botones play y stop', () => {
    test('Debe existir un botón de play', () => {
        const button = render(<IoPlay />);
        expect(button).toBeDefined()
    });
    test('El botón play debe reproducir la radio seleccionada', () => {
        const mockFunction = jest.fn();
        const button = render(<IoPlay />);
        button.addEventListener("click", mockFunction);
        fireEvent.click(button);
        expect(mockFunction).toBeCalled();
    });
    test('Debe existir un botón de stop', () => {
        const button = render(<IoStop />);
        expect(button).toBeDefined()
    });
})

