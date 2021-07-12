export const copyToClipboard = (value: string) => {
    const input = document.createElement("input");
    input.value = value;
    input.style.position = "absolute";
    input.style.opacity = "0";

    document.body.appendChild(input);

    input.select();
    input.setSelectionRange(0, 99999);

    document.execCommand("copy");

    document.body.removeChild(input);
};
