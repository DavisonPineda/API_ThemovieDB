
//Desplegar categorias  ComboBox

export const MostrarCategorias = (DirApi) => {
    fetch(DirApi).then((Resultado) => {
       
        Resultado.json().then((Datos) => {
            var html = document.getElementById('Categorias').innerHTML;
            Datos.genres.forEach(Categoria => {
                html += `<option value="${Categoria.id}">${Categoria.name}</option>`;
            })
            document.getElementById('Categorias').innerHTML = html;
        });
    });
}