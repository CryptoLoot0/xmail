(this["webpackJsonpdfn-react-ts"]=this["webpackJsonpdfn-react-ts"]||[]).push([[10],{1907:function(e,t,r){"use strict";r.r(t);var s=r(10),a={ra:{action:{add_filter:"Ajouter un filtre",add:"Ajouter",back:"Retour",bulk_actions:"%{smart_count} s\xe9lectionn\xe9 |||| %{smart_count} s\xe9lectionn\xe9s",cancel:"Annuler",clear_input_value:"Vider le champ",clone:"Dupliquer",confirm:"Confirmer",create:"Cr\xe9er",create_item:"Cr\xe9er %{item}",delete:"Supprimer",edit:"\xc9diter",export:"Exporter",list:"Liste",refresh:"Actualiser",remove_filter:"Supprimer ce filtre",remove:"Supprimer",save:"Enregistrer",search:"Rechercher",show:"Afficher",sort:"Trier",undo:"Annuler",unselect:"D\xe9s\xe9lectionner",expand:"\xc9tendre",close:"Fermer",open_menu:"Ouvrir le menu",close_menu:"Fermer le menu",update:"Modifier"},boolean:{true:"Oui",false:"Non",null:"\u2003"},page:{create:"Cr\xe9er %{name}",dashboard:"Tableau de bord",edit:"%{name} #%{id}",error:"Un probl\xe8me est survenu",list:"%{name}",loading:"Chargement",not_found:"Page manquante",show:"%{name} #%{id}",empty:"Pas encore de %{name}.",invite:"Voulez-vous en cr\xe9er un ?"},input:{file:{upload_several:"D\xe9posez les fichiers \xe0 uploader, ou cliquez pour en s\xe9lectionner.",upload_single:"D\xe9posez le fichier \xe0 uploader, ou cliquez pour le s\xe9lectionner."},image:{upload_several:"D\xe9posez les images \xe0 uploader, ou cliquez pour en s\xe9lectionner.",upload_single:"D\xe9posez l'image \xe0 uploader, ou cliquez pour la s\xe9lectionner."},references:{all_missing:"Impossible de trouver des donn\xe9es de r\xe9f\xe9rences.",many_missing:"Au moins une des r\xe9f\xe9rences associ\xe9es semble ne plus \xeatre disponible.",single_missing:"La r\xe9f\xe9rence associ\xe9e ne semble plus disponible."},password:{toggle_visible:"Cacher le mot de passe",toggle_hidden:"Montrer le mot de passe"}},message:{about:"Au sujet de",are_you_sure:"\xcates-vous s\xfbr ?",bulk_delete_content:"\xcates-vous s\xfbr(e) de vouloir supprimer cet \xe9l\xe9ment ? |||| \xcates-vous s\xfbr(e) de vouloir supprimer ces %{smart_count} \xe9l\xe9ments ?",bulk_delete_title:"Supprimer %{name} |||| Supprimer %{smart_count} %{name}",bulk_update_content:"\xcates-vous s\xfbr(e) de vouloir modifier cet \xe9l\xe9ment ? |||| \xcates-vous s\xfbr(e) de vouloir modifier ces %{smart_count} \xe9l\xe9ments ?",bulk_update_title:"Modifier %{name} |||| Modifier %{smart_count} %{name}",delete_content:"\xcates-vous s\xfbr(e) de vouloir supprimer cet \xe9l\xe9ment ?",delete_title:"Supprimer %{name} #%{id}",details:"D\xe9tails",error:"En raison d'une erreur c\xf4t\xe9 navigateur, votre requ\xeate n'a pas pu aboutir.",invalid_form:"Le formulaire n'est pas valide.",loading:"La page est en cours de chargement, merci de bien vouloir patienter.",no:"Non",not_found:"L'URL saisie est incorrecte, ou vous avez suivi un mauvais lien.",yes:"Oui",unsaved_changes:"Certains changements n'ont pas \xe9t\xe9 enregistr\xe9s. \xcates-vous s\xfbr(e) de vouloir quitter cette page ?"},navigation:{no_results:"Aucun r\xe9sultat",no_more_results:"La page num\xe9ro %{page} est en dehors des limites. Essayez la page pr\xe9c\xe9dente.",page_out_of_boundaries:"La page %{page} est en dehors des limites",page_out_from_end:"Fin de la pagination",page_out_from_begin:"La page doit \xeatre sup\xe9rieure \xe0 1",page_range_info:"%{offsetBegin}-%{offsetEnd} sur %{total}",page_rows_per_page:"Lignes par page :",next:"Suivant",prev:"Pr\xe9c\xe9dent",skip_nav:"Aller au contenu"},sort:{sort_by:"Trier par %{field} %{order}",ASC:"croissant",DESC:"d\xe9croissant"},auth:{auth_check_error:"Merci de vous connecter pour continuer",user_menu:"Profil",username:"Identifiant",password:"Mot de passe",sign_in:"Connexion",sign_in_error:"\xc9chec de l'authentification, merci de r\xe9essayer",logout:"D\xe9connexion"},notification:{updated:"\xc9l\xe9ment mis \xe0 jour |||| %{smart_count} \xe9lements mis \xe0 jour",created:"\xc9l\xe9ment cr\xe9\xe9",deleted:"\xc9l\xe9ment supprim\xe9 |||| %{smart_count} \xe9lements supprim\xe9s",bad_item:"\xc9l\xe9ment inconnu",item_doesnt_exist:"L'\xe9l\xe9ment n'existe pas",http_error:"Erreur de communication avec le serveur",data_provider_error:"Erreur dans le dataProvider. Plus de d\xe9tails dans la console.",i18n_error:"Erreur de chargement des traductions pour la langue s\xe9lectionn\xe9e",canceled:"Action annul\xe9e",logged_out:"Votre session a pris fin, veuillez vous reconnecter.",not_authorized:"Vous n'\xeates pas autoris\xe9(e) \xe0 acc\xe9der \xe0 cette ressource."},validation:{required:"Ce champ est requis",minLength:"Minimum %{min} caract\xe8res",maxLength:"Maximum %{max} caract\xe8res",minValue:"Minimum %{min}",maxValue:"Maximum %{max}",number:"Doit \xeatre un nombre",email:"Doit \xeatre un email",oneOf:"Doit \xeatre au choix: %{options}",regex:"Doit respecter un format sp\xe9cifique (regexp): %{pattern}"}}},n=Object(s.a)(Object(s.a)({},a),{},{pos:{search:"Rechercher",configuration:"Configuration",language:"Langue",theme:{name:"Theme",light:"Clair",dark:"Obscur"},dashboard:{monthly_revenue:"CA \xe0 30 jours",month_history:"Chiffre d'affaire sur 30 jours",new_orders:"Nouvelles commandes",pending_reviews:"Commentaires \xe0 mod\xe9rer",all_reviews:"Voir tous les commentaires",new_customers:"Nouveaux clients",all_customers:"Voir tous les clients",pending_orders:"Commandes \xe0 traiter",order:{items:"par %{customer_name}, un poster |||| par %{customer_name}, %{nb_items} posters"},welcome:{title:"Bienvenue sur la d\xe9mo e-commerce de react-admin",subtitle:"Ceci est le back-office d'un magasin de posters imaginaire. N'h\xe9sitez pas \xe0 explorer et \xe0 modifier les donn\xe9es. La d\xe9mo s'ex\xe9cute en local dans votre navigateur, et se remet \xe0 z\xe9ro chaque fois que vous rechargez la page.",ra_button:"Site web de react-admin",demo_button:"Code source de cette d\xe9mo"}},menu:{sales:"Ventes",catalog:"Catalogue",customers:"Clients",inbox:"Inbox",compose:"Compose"}},resources:{customers:{name:"Client |||| Clients",fields:{address:"Rue",birthday:"Anniversaire",city:"Ville",stateAbbr:"Etat",commands:"Commandes",first_name:"Pr\xe9nom",first_seen:"Premi\xe8re visite",groups:"Segments",has_newsletter:"Abonn\xe9 \xe0 la newsletter",has_ordered:"A command\xe9",last_name:"Nom",last_seen:"Vu le",last_seen_gte:"Vu depuis",latest_purchase:"Dernier achat",name:"Nom",total_spent:"D\xe9penses",zipcode:"Code postal",password:"Mot de passe",confirm_password:"Confirmez le mot de passe"},filters:{last_visited:"Derni\xe8re visite",today:"Aujourd'hui",this_week:"Cette semaine",last_week:"La semaine derni\xe8re",this_month:"Ce mois-ci",last_month:"Le mois dernier",earlier:"Plus t\xf4t",has_ordered:"A d\xe9j\xe0 command\xe9",has_newsletter:"Abonn\xe9 newsletter",group:"Segment"},fieldGroups:{identity:"Identit\xe9",address:"Adresse",stats:"Statistiques",history:"Historique",password:"Mot de passe",change_password:"Changer le mot de passe"},page:{delete:"Supprimer le client"},errors:{password_mismatch:"La confirmation du mot de passe est diff\xe9rent du mot de passe."}},commands:{name:"Commande |||| Commandes",amount:"1 commande |||| %{smart_count} commandes",title:"Commande n\xb0%{reference}",fields:{basket:{delivery:"Frais de livraison",reference:"R\xe9f\xe9rence",quantity:"Quantit\xe9",sum:"Sous-total",tax_rate:"TVA",taxes:"TVA",total:"Total",unit_price:"P.U."},address:"Adresse",customer_id:"Client",date_gte:"Emises depuis",date_lte:"Emises avant",nb_items:"Nb articles",reference:"R\xe9f\xe9rence",returned:"Annul\xe9e",status:"Etat",total_gte:"Montant minimum"},section:{order:"Commande",customer:"Client",shipping_address:"Adresse de livraison",items:"Articles",total:"Total"}},invoices:{name:"Facture |||| Factures",fields:{id:"Num\xe9ro",date:"Date de facture",customer_id:"Client",command_id:"Commande",date_gte:"Emises depuis",date_lte:"Emises avant",address:"Adresse",total_ex_taxes:"Montant HT",delivery_fees:"Frais de livraison",taxes:"TVA"}},products:{name:"Poster |||| Posters",fields:{category_id:"Cat\xe9gorie",height_gte:"Hauteur mini",height_lte:"Hauteur maxi",height:"Hauteur",image:"Photo",price:"Prix",reference:"R\xe9f\xe9rence",sales:"Ventes",stock_lte:"Stock faible",stock:"Stock",thumbnail:"Aper\xe7u",width_gte:"Largeur mini",width_lte:"Margeur maxi",width:"Largeur"},tabs:{image:"Image",details:"D\xe9tails",description:"Description",reviews:"Commentaires"},filters:{categories:"Cat\xe9gories",stock:"Stock",no_stock:"En rupture",low_stock:"1 - 9 unit\xe9s",average_stock:"10 - 49 unit\xe9s",enough_stock:"50 unit\xe9s et plus",sales:"Ventes",best_sellers:"Meilleures ventes",average_sellers:"Moyennes",low_sellers:"Peu vendu",never_sold:"Jamais vendu"}},categories:{name:"Cat\xe9gorie |||| Cat\xe9gories",fields:{name:"Nom",products:"Produits"}},reviews:{name:"Commentaire |||| Commentaires",amount:"1 commentaire |||| %{smart_count} commentaires",relative_to_poster:"Commentaire sur",detail:"D\xe9tail du commentaire",fields:{customer_id:"Client",command_id:"Commande",product_id:"Produit",date_gte:"Publi\xe9 depuis",date_lte:"Publi\xe9 avant",date:"Date",comment:"Texte",status:"Statut",rating:"Classement"},action:{accept:"Accepter",reject:"Rejeter"},notification:{approved_success:"Commentaire approuv\xe9",approved_error:"Erreur: Commentaire non approuv\xe9",rejected_success:"Commentaire rejet\xe9",rejected_error:"Erreur: Commentaire non rejet\xe9"}},segments:{name:"Segment |||| Segments",fields:{customers:"Clients",name:"Nom"},data:{compulsive:"Compulsif",collector:"Collectionneur",ordered_once:"A command\xe9",regular:"R\xe9gulier",returns:"A renvoy\xe9",reviewer:"Commentateur"}}}});t.default=n}}]);
//# sourceMappingURL=10.fbd6dc0e.chunk.js.map