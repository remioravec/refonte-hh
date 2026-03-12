# Guide de déploiement — Design System Hello Harel

> Ce guide explique **exactement** comment appliquer le nouveau design sur le staging
> `helloharel.com/prometheus` via l'éditeur Elementor.

---

## Pré-requis

- Accès administrateur au staging WordPress
- Le fichier `global.css` (dans ce dossier)
- Le fichier `animations.js` (dans ce dossier)

---

## ÉTAPE 1 — Supprimer l'ancien CSS qui bloque les animations

1. Aller dans **Elementor > Réglages du site** (icône hamburger ☰ en haut à gauche → Réglages du site)
2. Cliquer sur **CSS Personnalisé** (tout en bas)
3. **Supprimer** cette règle qui existe actuellement :
   ```css
   * {
     animation: none !important;
     transition: none !important;
   }
   ```
4. Sauvegarder

---

## ÉTAPE 2 — Injecter le CSS Global

### Option A : Via Elementor Custom CSS (recommandé)

1. **Elementor > Réglages du site > CSS Personnalisé**
2. Coller **tout** le contenu de `global.css`
3. Sauvegarder

### Option B : Via un plugin Custom CSS (si le champ Elementor est trop petit)

1. Installer le plugin **"Simple Custom CSS and JS"**
2. Ajouter un nouveau CSS → coller `global.css`
3. S'assurer qu'il se charge sur **toutes les pages**

### Option C : Via le fichier functions.php du thème enfant

```php
function hh_design_system_css() {
    wp_enqueue_style(
        'hh-design-system',
        get_stylesheet_directory_uri() . '/hh-design-system.css',
        array(),
        '2026.03'
    );
}
add_action('wp_enqueue_scripts', 'hh_design_system_css');
```

---

## ÉTAPE 3 — Injecter le JavaScript d'animations

### Option A : Via Elementor > Custom Code

1. Aller dans **Elementor > Custom Code** (menu WP admin)
2. Créer un nouveau snippet
3. Nom : "HH Scroll Animations"
4. Emplacement : **Avant `</body>`**
5. Coller :
   ```html
   <script>
   [contenu de animations.js]
   </script>
   ```
6. Condition : Tout le site
7. Publier

### Option B : Via un widget HTML dans le footer template

1. Ouvrir le template footer (ID 1746) dans Elementor
2. Ajouter un widget **HTML** tout en bas
3. Coller le `<script>` ci-dessus
4. Sauvegarder

---

## ÉTAPE 4 — Configurer les Global Colors Elementor

Aller dans **Elementor > Réglages du site > Couleurs globales** et configurer :

| Nom dans Elementor | Valeur Hex | Usage |
|---|---|---|
| Primary | `#1d4ed8` | Boutons, liens, accents principaux |
| Primary Dark | `#1e3a8a` | Header, sections sombres |
| Primary Light | `#3b82f6` | Hover léger, liens |
| Accent Emerald | `#059669` | Module stock, badges succès |
| Accent Amber | `#d97706` | Module fabrication, alertes |
| Accent Red | `#dc2626` | Module qualité, erreurs |
| Text Dark | `#0f172a` | Titres (slate-900) |
| Text Body | `#64748b` | Corps de texte (slate-500) |
| Background Light | `#f8fafc` | Fonds alternés (slate-50) |
| Background Blue | `#eff6ff` | Fonds bleutés (blue-50) |

---

## ÉTAPE 5 — Configurer les Global Fonts Elementor

Aller dans **Elementor > Réglages du site > Polices globales** :

| Nom | Font Family | Weight | Size | Line Height |
|---|---|---|---|---|
| Primary Heading | Inter | 900 (Black) | — | 1.1 |
| Secondary Heading | Inter | 700 (Bold) | — | 1.3 |
| Body Text | Inter | 500 (Medium) | 16px | 1.75 |
| Accent Text | Inter | 700 (Bold) | 12px | 1 |

---

## ÉTAPE 6 — Vérification post-déploiement

Après avoir injecté le CSS, vérifier **chaque page** du `seo-baseline.md` :

### Checklist par page :

- [ ] La page charge sans erreur 404/500
- [ ] Le meta title est identique (onglet navigateur)
- [ ] Le H1 est identique (inspecter ou vue source)
- [ ] Le contenu texte est intact
- [ ] Les liens internes fonctionnent
- [ ] Le design correspond à la maquette :
  - [ ] Header bleu foncé avec nav blanche
  - [ ] Typo Inter, titres bold/black
  - [ ] Cards arrondies avec hover animé
  - [ ] Boutons bleus arrondis
  - [ ] Footer slate-900 sombre
  - [ ] Espacement généreux entre sections

### Pages prioritaires à vérifier en premier :

1. **Accueil** (`/`) — ID 2
2. **Fonctionnalités** (`/fonctionnalites/`) — ID 4728
3. **ERP Agroalimentaire** (`/agroalimentaire/`) — ID 1726
4. **Tarifs** (`/tarifs/`) — ID 608
5. **Contact** (`/contact/`) — ID 661
6. **Un article de blog** (`/blog/erp-saas/`) — ID 5325

---

## ÉTAPE 7 — Classes utilitaires disponibles

Le CSS inclut des classes à appliquer manuellement sur les widgets Elementor
(champ **CSS Classes** dans l'onglet Avancé de chaque widget) :

### Backgrounds de section
| Classe | Effet |
|---|---|
| `hh-bg-white` | Fond blanc |
| `hh-bg-slate` | Fond gris clair (#f8fafc) |
| `hh-bg-blue-light` | Fond bleu clair (#eff6ff) |
| `hh-bg-dark` | Fond sombre (#0f172a) + texte blanc |
| `hh-gradient-blue` | Dégradé bleu clair → blanc |

### Cards
| Classe | Effet |
|---|---|
| `hh-card` | Card arrondie avec hover animé |

### Accents d'icônes (sur widget icon-box)
| Classe | Couleur icône |
|---|---|
| `hh-accent-emerald` | Vert (#059669) |
| `hh-accent-indigo` | Indigo (#4f46e5) |
| `hh-accent-amber` | Ambre (#d97706) |
| `hh-accent-red` | Rouge (#dc2626) |
| `hh-accent-teal` | Teal (#0d9488) |
| `hh-accent-cyan` | Cyan (#0891b2) |
| `hh-accent-orange` | Orange (#ea580c) |

### Boutons
| Classe | Effet |
|---|---|
| `hh-btn-secondary` | Bouton blanc avec bordure |

### Animation
| Classe | Effet |
|---|---|
| `hh-fade-in` | Apparition au scroll (fade + slide up) |

### Utilitaires
| Classe | Effet |
|---|---|
| `hh-text-center` | Texte centré |
| `hh-text-white` | Texte blanc |
| `hh-text-primary` | Texte bleu primary |
| `hh-rounded-2xl` | Border-radius 1.5rem |
| `hh-max-w-3xl` | Max-width 48rem |
| `hh-max-w-4xl` | Max-width 56rem |
| `hh-py-0` | Padding vertical 0 (override section) |

---

## Rollback si problème

Si le design casse quelque chose :
1. Retirer le contenu de `global.css` du Custom CSS Elementor
2. Remettre l'ancienne règle `* { animation: none !important; }`
3. Le site revient à son état d'origine instantanément

Aucune modification de contenu n'est faite — le rollback est 100% safe.
