using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Components.Web;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Razor Pages support is required for the fallback page used to host the Blazor components.
builder.Services.AddRazorPages();
// Register server‑side Blazor services.  This enables the component model on the server.
builder.Services.AddServerSideBlazor();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Error");
    // The default HSTS value is 30 days.  You may want to change this for production scenarios.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

// Map the Blazor hub and the fallback page that hosts the root component.
app.MapBlazorHub();
app.MapFallbackToPage("/_Host");

app.Run();