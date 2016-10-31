/* translation file for slovenian language */
/* not in use */

export class LocalLabels {
    labels =
    {
        language: "slovenian",
        components: {
            genlist: {
                title: "Urejanje xxxxxšifranta ",
                post: {
                    tableTitle: "xxxxxpošt",
                    postId: "#",
                    name: "Nazivxxxxpošte",
                    zipcode: "Poštna xxxxštevilka",
                    newRecordRoute: "./post"
                },
                commune: {
                    tableTitle: "xxxxobčin",
                    communeId: "#",
                    name: "Naziv xxxxobčine",
                    newRecordRoute: "genlist/commune/new"
                },
                education: {
                    tableTitle: "izobrazb",
                    educationId: "#",
                    name: "Vrsta izobrazbe"
                },
                person: {
                    tableTitle: "oseb",
                    personId: "#",
                    firstName: "Ime",
                    lastName: "Priimek",
                    newRecord: "/person"
                }
            },
            form: {
                new: {
                    title: "Vnos ",
                    action: "Shrani "
                },
                edit: {
                    title: "Urejanje ",
                    action: "Shrani"
                },
                btn: {
                    cancel: "Prekliči"
                },
                post: {
                    new: "nove ",
                    title: " pošte"
                }
            }
        }
    }
    ;

    getLabel(key): JSON {
        return this.labels[key];
    }
}