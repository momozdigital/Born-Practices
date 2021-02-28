var zip,
  zip_input,
  country,
  region,
  comunas,
  city,
  select,
  carret,
  select_html,
  province_container,
  city_container;

function handleRegionChange () {

  if (!comunas.hasOwnProperty(region.value)) return;

  c = comunas[region.value];
  select_html = ["<option value='' >Seleccione Comuna</option>"];
  for (var i = 0; i < c.length; i++) {
    select_html.push("<option value='" + c[i] + "'>" + c[i] + "</option>");
  }

  select.innerHTML = select_html.join("");
  handleProvinceChange();
}

function handleProvinceChange () {
  city.value = select.value;
}

// AN -> Antofagasta
// AR -> Araucanía
// AP -> Arica and Parinacota
// AT -> Atacama
// AI -> Aysén
// BI -> Biobío
// CO -> Coquimbo
// LL -> Los Lagos
// LR -> Los Ríos
// MA -> Magallanes
// ML -> Maule
// NB -> Ñuble
// LI -> O’Higgins
// RM -> Santiago
// TA -> Tarapacá
// VS -> Valparaíso
comunas = {
  'AN':
    ['Antofagasta',
      'Calama',
      'María Elena',
      'Mejillones',
      'Ollagüe',
      'San Pedro de Atacama',
      'Sierra Gorda',
      'Taltal',
      'Tocopilla'],
  'AR':
    ['Angol',
      'Carahue',
      'Cholchol',
      'Collipulli',
      'Cunco',
      'Curacautín',
      'Curarrehue',
      'Ercilla',
      'Freire',
      'Galvarino',
      'Gorbea',
      'Lautaro',
      'Loncoche',
      'Lonquimay',
      'Los Sauces',
      'Lumaco',
      'Melipeuco',
      'Nueva Imperial',
      'Padre las Casas',
      'Perquenco',
      'Pitrufquén',
      'Pucón',
      'Purén',
      'Renaico',
      'Saavedra',
      'Temuco',
      'Teodoro Schmidt',
      'Toltén',
      'Traiguén',
      'Victoria',
      'Vilcún',
      'Villarrica'],
  'AP': ['Arica', 'Camarones', 'General Lagos', 'Putre'],
  'AT':
    ['Alto del Carmen',
      'Caldera',
      'Chañaral',
      'Copiapó',
      'Diego de Almagro',
      'Freirina',
      'Huasco',
      'Tierra Amarilla',
      'Vallenar'],
  'AI':
    ['Aisén',
      'Chile Chico',
      'Cisnes',
      'Cochrane',
      'Coihaique',
      'Guaitecas',
      'Lago Verde',
      'O’Higgins',
      'Río Ibáñez',
      'Tortel'],
  'BI':
    ['Alto Biobío',
      'Antuco',
      'Arauco',
      'Cabrero',
      'Cañete',
      'Chiguayante',
      'Concepción',
      'Contulmo',
      'Coronel',
      'Curanilahue',
      'Florida',
      'Hualpén',
      'Hualqui',
      'Laja',
      'Lebu',
      'Los Álamos',
      'Los Ángeles',
      'Lota',
      'Mulchén',
      'Nacimiento',
      'Negrete',
      'Penco',
      'Quilaco',
      'Quilleco',
      'San Pedro de la Paz',
      'San Rosendo',
      'Santa Bárbara',
      'Santa Juana',
      'Talcahuano',
      'Tirúa',
      'Tomé',
      'Tucapel',
      'Yumbel'],
  'CO':
    ['Andacollo',
      'Canela',
      'Combarbalá',
      'Coquimbo',
      'Illapel',
      'La Higuera',
      'La Serena',
      'Los Vilos',
      'Monte Patria',
      'Ovalle',
      'Paihuano',
      'Punitaqui',
      'Río Hurtado',
      'Salamanca',
      'Vicuña'],
  'LL':
    ['Ancud',
      'Calbuco',
      'Castro',
      'Chaitén',
      'Chonchi',
      'Cochamó',
      'Curaco de Vélez',
      'Dalcahue',
      'Fresia',
      'Frutillar',
      'Futaleufú',
      'Hualaihué',
      'Llanquihue',
      'Los Muermos',
      'Maullín',
      'Osorno',
      'Palena',
      'Puerto Montt',
      'Puerto Octay',
      'Puerto Varas',
      'Puqueldón',
      'Purranque',
      'Puyehue',
      'Queilén',
      'Quellón',
      'Quemchi',
      'Quinchao',
      'Río Negro',
      'San Juan de la Costa',
      'San Pablo'],
  'LR':
    ['Corral',
      'Futrono',
      'La Unión',
      'Lago Ranco',
      'Lanco',
      'Los Lagos',
      'Mariquina',
      'Máfil',
      'Paillaco',
      'Panguipulli',
      'Río Bueno',
      'Valdivia'],
  'MA':
    ['Antártica',
      'Cabo de Hornos (Ex Navarino)',
      'Laguna Blanca',
      'Natales',
      'Porvenir',
      'Primavera',
      'Punta Arenas',
      'Río Verde',
      'San Gregorio',
      'Timaukel',
      'Torres del Paine'],
  'ML':
    ['Cauquenes',
      'Chanco',
      'Colbún',
      'Constitución',
      'Curepto',
      'Curicó',
      'Empedrado',
      'Hualañé',
      'Licantén',
      'Linares',
      'Longaví',
      'Maule',
      'Molina',
      'Parral',
      'Pelarco',
      'Pelluhue',
      'Pencahue',
      'Rauco',
      'Retiro',
      'Romeral',
      'Río Claro',
      'Sagrada Familia',
      'San Clemente',
      'San Javier',
      'San Rafael',
      'Talca',
      'Teno',
      'Vichuquén',
      'Villa Alegre',
      'Yerbas Buenas'],
  'NB':
    ['Bulnes',
      'Chillán',
      'Chillán Viejo',
      'Cobquecura',
      'Coelemu',
      'Coihueco',
      'El Carmen',
      'Ninhue',
      'Pemuco',
      'Pinto',
      'Portezuelo',
      'Quillón',
      'Quirihue',
      'Ránquil',
      'San Carlos',
      'San Fabián',
      'San Ignacio',
      'San Nicolás',
      'Treguaco',
      'Yungay',
      'Ñiquén'],
  'LI':
    ['Chimbarongo',
      'Chépica',
      'Codegua',
      'Coinco',
      'Coltauco',
      'Doñihue',
      'Graneros',
      'La Estrella',
      'Las Cabras',
      'Litueche',
      'Lolol',
      'Machalí',
      'Malloa',
      'Marchihue',
      'Mostazal',
      'Nancagua',
      'Navidad',
      'Olivar',
      'Palmilla',
      'Paredones',
      'Peralillo',
      'Peumo',
      'Pichidegua',
      'Pichilemu',
      'Placilla',
      'Pumanque',
      'Quinta de Tilcoco',
      'Rancagua',
      'Rengo',
      'Requínoa',
      'San Fernando',
      'San Vicente',
      'Santa Cruz'],
  'RM':
    ['Alhué',
      'Buin',
      'Calera de Tango',
      'Cerrillos',
      'Cerro Navia',
      'Colina',
      'Conchalí',
      'Curacaví',
      'El Bosque',
      'El Monte',
      'Estación Central',
      'Huechuraba',
      'Independencia',
      'Isla de Maipo',
      'La Cisterna',
      'La Florida',
      'La Granja',
      'La Pintana',
      'La Reina',
      'Lampa',
      'Las Condes',
      'Lo Barnechea',
      'Lo Espejo',
      'Lo Prado',
      'Macul',
      'Maipú',
      'María Pinto',
      'Melipilla',
      'Padre Hurtado',
      'Paine',
      'Pedro Aguirre Cerda',
      'Peñaflor',
      'Peñalolén',
      'Pirque',
      'Providencia',
      'Pudahuel',
      'Puente Alto',
      'Quilicura',
      'Quinta Normal',
      'Recoleta',
      'Renca',
      'San Bernardo',
      'San Joaquín',
      'San José de Maipo',
      'San Miguel',
      'San Pedro',
      'San Ramón',
      'Santiago',
      'Talagante',
      'Tiltil',
      'Vitacura',
      'Ñuñoa'],
  'TA':
    ['Alto Hospicio',
      'Camiña',
      'Colchane',
      'Huara',
      'Iquique',
      'Pica',
      'Pozo Almonte'],
  'VS':
    ['Algarrobo',
      'Cabildo',
      'Calera',
      'Calle Larga',
      'Cartagena',
      'Casablanca',
      'Catemu',
      'Concón',
      'El Quisco',
      'El Tabo',
      'Hijuelas',
      'Isla de Pascua',
      'Juan Fernández',
      'La Cruz',
      'La Ligua',
      'Limache',
      'Llaillay',
      'Los Andes',
      'Nogales',
      'Olmué',
      'Panquehue',
      'Papudo',
      'Petorca',
      'Puchuncaví',
      'Putaendo',
      'Quillota',
      'Quilpué',
      'Quintero',
      'Rinconada',
      'San Antonio',
      'San Esteban',
      'San Felipe',
      'Santa María',
      'Santo Domingo',
      'Valparaíso',
      'Villa Alemana',
      'Viña del Mar',
      'Zapallar']
};

function docReady(fn) {
  // see if DOM is already available
  if (document.readyState === "complete" || document.readyState === "interactive") {
      // call on next available tick
      setTimeout(fn, 1);
  } else {
      document.addEventListener("DOMContentLoaded", fn);
  }
}

docReady(function ()
{
  zip_input = document.getElementById("checkout_shipping_address_zip");
  zip = document.querySelectorAll("[data-address-field=zip]")[0];
  country = document.querySelectorAll("[data-address-field=country]")[0];
  city = document.getElementById("checkout_shipping_address_city");
  region = document.getElementById("checkout_shipping_address_province");

  if (zip_input !== null)
    zip_input.value = "7804385";
  if (zip !== undefined)
    zip.style = "display:none";
  if (country !== undefined)
    country.classList.remove("field--half");

  // region y comuna
  if (city !== null) {
    select = document.createElement("select");
    select.classList.add("field__input");
    select.classList.add("field__input--select");
    select.attributes["data-trekkie-id"] = "shipping_city_field";
    select.innerHTML = "<option disabled value='' >Seleccione Región</option>";

    carret = document.createElement("div");
    carret.classList.add("field__caret");
    carret.classList.add("shown-if-js");
    carret.innerHTML = '<svg class="icon-svg icon-svg--color-adaptive-lighter icon-svg--size-10 field__caret-svg" role="presentation" aria-hidden="true" focusable="false"> <use xlink:href="#caret-down"></use> </svg>';

    city.parentNode.insertBefore(carret, city);
    city.parentNode.insertBefore(select, city);

    select.addEventListener("change", handleProvinceChange);

    city.value = "";
    city.style = "display:none";

    handleRegionChange();
    handleProvinceChange();
    region.addEventListener("change", handleRegionChange);

    province_container = document.querySelectorAll("[data-address-field=province]")[0];
    city_container = document.querySelectorAll("[data-address-field=city]")[0];
    city_container.parentElement.insertBefore(province_container, city_container);
    country.style = "display:none";

  }
});
