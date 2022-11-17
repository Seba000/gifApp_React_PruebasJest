import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks";

describe("Pruebas en el hook useFetchGifs", () => {
  test("debe regrasar el estado inicial", () => {
    const { result } = renderHook(() => useFetchGifs("One punch"));
    const { images, isLoading } = result.current;
    expect(images.length).toBe(0);
    expect(isLoading).toBeTruthy();
  });

  test("debe retornar un arreglo de img y el isLoading debe estar seteado en false", async () => {
    const { result } = renderHook(() => useFetchGifs("One punch"));

    await waitFor(
      () => expect(result.current.images.length).toBeGreaterThan(0),
      {
        timeout: 2000,
      }
    );
    const { images, isLoading } = result.current;
    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
  });
});
