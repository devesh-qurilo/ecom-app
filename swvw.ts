// app/
//  ├─ (public)/                 # Without navbar/sidebar
//  │   ├─ layout.tsx             # Public layout
//  │   ├─ page.tsx               # Home
//  │   ├─ products/
//  │   │   ├─ page.tsx           # Product listing
//  │   │   └─ [slug]/page.tsx    # Product detail
//  │
//  ├─ (auth)/                    # Auth screens (no sidebar)
//  │   ├─ layout.tsx
//  │   ├─ login/page.tsx
//  │   ├─ register/page.tsx
//  │
//  ├─ (shop)/                    # WITH navbar + sidebar
//  │   ├─ layout.tsx             # 🔥 MAIN SHELL
//  │   ├─ cart/page.tsx
//  │   ├─ checkout/page.tsx
//  │   ├─ orders/page.tsx
//  │
//  ├─ api/                       # Route handlers
//  │
// components/
//  ├─ ui/                        # shadcn
//  ├─ layout/                    # Navbar, Sidebar
//  ├─ product/
//  ├─ cart/
// store/
//  ├─ useAuthStore.ts
//  ├─ useCartStore.ts
//  ├─ useUIStore.ts
// lib/
//  ├─ fetcher.ts
//  ├─ queryClient.ts
//  ├─ utils.ts
// services/
//  ├─ product.service.ts
//  ├─ auth.service.ts
