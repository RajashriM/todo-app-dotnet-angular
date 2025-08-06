using Microsoft.OpenApi.Models;
using TodoApi.Services;
var builder = WebApplication.CreateBuilder(args);

// registers MVC controllers
builder.Services.AddControllers();

//registers the service
builder.Services.AddSingleton<TodoService>();

//CORS setup for dev (so Angular can call the API)
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", b =>
        b.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());
});

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo
    {
        Title = "Todo API",
        Version = "v1",
        Description = "A simple TODO API"
    });
});
var app = builder.Build();

app.UseHttpsRedirection();
app.UseCors("AllowAll");
//Configure the HTTP request pipeline.
 if (app.Environment.IsDevelopment())
{
  app.UseSwagger();
    app.UseSwaggerUI(c =>
    {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "Todo API v1");
    });;
}
app.MapControllers();
app.Run();
