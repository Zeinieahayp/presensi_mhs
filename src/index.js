
export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/api/health") {
      return Response.json({
        success: true,
        message: "Worker berhasil terhubung!",
        database: Boolean(env.DB)
      });
    }

    if (url.pathname.startsWith("/api/")) {
      return Response.json(
        { error: "API belum tersedia" },
        { status: 404 }
      );
    }

    return env.ASSETS.fetch(request);
  }
};

