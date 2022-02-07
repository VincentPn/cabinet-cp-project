BEGIN;

DROP TABLE IF EXISTS "user", "situation";

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
  "chiffre_d_affaires" DECIMAL(10, 2),
  "achats_sur_activité" DECIMAL(10, 2),
  "autres_achats" DECIMAL(10, 2),
  "impots" DECIMAL(10, 2),
  "salaires" DECIMAL(10, 2),
  "charges_sociales" DECIMAL(10, 2),
  "amortissements" DECIMAL(10, 2),
  "provisions" DECIMAL(10, 2),
  "autres_charges" DECIMAL(10, 2),
  "subventions" DECIMAL(10, 2),
  "reprises_sur_amortissements" DECIMAL(10, 2),
  "autres_produits" DECIMAL(10, 2),
  "resultat_financier" DECIMAL(10, 2),
  "resultat_exceptionnel" DECIMAL(10, 2),
  "participation" DECIMAL(10, 2),
  "impot_sur_societes" DECIMAL(10, 2),
  "user_id" INTEGER NOT NULL REFERENCES "utilisateur" ("id") ON DELETE CASCADE
);

INSERT INTO "utilisateur" ("nom", "prenom", "email", "password", "role") VALUES
('Christophe', 'Payen', 'test@gmail.com', '1234', 'admin');

INSERT INTO "situation" ("chiffre_d_affaires","achats_sur_activité","autres_achats","impots","salaires","charges_sociales","amortissements","autres_charges","autres_produits","resultat_exceptionnel","user_id") VALUES
(41525, 741.90, 7856.93, 3318.20, 23269.00, 14939.00, 1274.88, 604.67, 1.90, -510.73, 1)
;

COMMIT;