BEGIN;

DROP TABLE IF EXISTS "utilisateur", "situation";

CREATE TABLE "utilisateur" (
  "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "nom" TEXT NOT NULL,
  "prenom" TEXT NOT NULL,
  "email" TEXT NOT NULL,
  "password" TEXT NOT NULL,
  "role" TEXT DEFAULT 'user',
  "raison_sociale" TEXT
);

CREATE TABLE "situation" (
  "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "chiffre_d_affaires" MONEY DEFAULT 0,
  "achats_sur_activité" MONEY DEFAULT 0,
  "autres_achats" MONEY DEFAULT 0,
  "impots" MONEY DEFAULT 0,
  "salaires" MONEY DEFAULT 0,
  "charges_sociales" MONEY DEFAULT 0,
  "amortissements" MONEY DEFAULT 0,
  "provisions" MONEY DEFAULT 0,
  "autres_charges" MONEY DEFAULT 0,
  "subventions" MONEY DEFAULT 0,
  "reprises_sur_amortissements" MONEY DEFAULT 0,
  "autres_produits" MONEY DEFAULT 0,
  "resultat_financier" MONEY DEFAULT 0,
  "resultat_exceptionnel" MONEY DEFAULT 0,
  "participation" MONEY DEFAULT 0,
  "impot_sur_societes" MONEY DEFAULT 0,
  "user_id" INTEGER NOT NULL REFERENCES "utilisateur" ("id") ON DELETE CASCADE
);

INSERT INTO "utilisateur" ("nom", "prenom", "email", "password", "role") VALUES
('Christophe', 'Payen', 'test@gmail.com', '1234', 'admin');

INSERT INTO "situation" ("chiffre_d_affaires","achats_sur_activité","autres_achats","impots","salaires","charges_sociales","amortissements","autres_charges","autres_produits","resultat_exceptionnel","user_id") VALUES
(41525, 741.90, 7856.93, 3318.20, 23269.00, 14939.00, 1274.88, 604.67, 1.90, -510.73, 1)
;

COMMIT;