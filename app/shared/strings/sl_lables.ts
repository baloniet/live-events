/* translation file for slovenian language */


export class LocalLabels {
    labels =
    {
        "language": "slovenian",
        "components": {
            "genlist": {
                "title": "Urejanje šifranta ",
                "post": {
                    tableTitle: "pošt",
                    "postId": "#",
                    "name": "Naziv pošte",
                    "zipcode": "Poštna številka"
                },
                "commune": {
                    tableTitle: "občin",
                    "communeId": "#",
                    "name": "Naziv občine"
                },
                "education": {
                    tableTitle: "izobrazb",
                    "educationId": "#",
                    "name": "Vrsta izobrazbe"
                }
            }
        }
    }
    ;

    getLabel(key): JSON {
        return this.labels[key];
    }
}