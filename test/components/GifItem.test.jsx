import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('Pruebas en <GifItem/>',() => {
    
    const title = 'Saitama';
    const url = 'https://one-punch.com/saitama.jpg'

    test('hacer match con el snapshot', () => {
        const { container } =  render( <GifItem title={title} url={url} />);
        expect( container ).toMatchSnapshot();
    });

    test('mostrar imagen con url y alt indicado', () => { 
        render(<GifItem title={title} url={url} />);
        const {src, alt} = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(alt);
    });

    test('mostrar el titulo en el component', () => { 
        render(<GifItem title={title} url={url} />);
        expect( screen.getByText(title)).toBeTruthy();
    });
});